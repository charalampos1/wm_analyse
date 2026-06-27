import { CONFIG } from '../config/settings.js';

export async function callGeminiAPI(prompt, apiKey) {
  if (!apiKey) throw new Error("Kein API-Key hinterlegt. Bitte in den Einstellungen eintragen.");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.9,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${response.status}`;
    if (response.status === 401 || response.status === 403) throw new Error('Ungültiger API-Key.');
    if (response.status === 429) throw new Error('Rate-Limit erreicht. Bitte kurz warten.');
    throw new Error(`API-Fehler: ${msg}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    if (data?.candidates?.[0]?.finishReason === 'SAFETY') throw new Error('Antwort aus Sicherheitsgründen blockiert.');
    throw new Error('Keine Antwort von der API erhalten.');
  }
  return text;
}
