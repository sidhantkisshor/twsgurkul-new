const AISENSY_API_URL = 'https://backend.aisensy.com/campaign/t1/api/v2';

interface AiSensyPayload {
  campaignName: string;
  destination: string;
  userName: string;
  source?: string;
  templateParams?: string[];
  tags?: string[];
}

/**
 * Fire-and-forget AiSensy campaign trigger.
 * Silently fails if API key is missing or request errors — never blocks UI.
 */
export async function sendAiSensyCampaign(payload: AiSensyPayload): Promise<void> {
  const apiKey = import.meta.env.VITE_AISENSY_API_KEY || '';
  if (!apiKey) return;

  try {
    await fetch(AISENSY_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey, ...payload }),
    });
  } catch {
    // silently fail — never block UI
  }
}
