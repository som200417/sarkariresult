const API = "https://api.sarkariresult6.com/wp-json/wp/v2";

export async function wpFetch<T>(
  endpoint: string,
  options: RequestInit = {},
 
): Promise<T> {
  const res = await fetch(`${API}${endpoint}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error("WP API Error");
  }

  return res.json();
}