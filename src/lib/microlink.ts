export interface MicrolinkResponse {
  status: string;
  data: {
    title: string;
    description: string;
    image: {
      url: string;
    };
    screenshot: {
      url: string;
    };
  };
}

export async function getMicrolinkPreview(url: string): Promise<string> {
  try {
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
    const response = await fetch(apiUrl, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error('Failed to fetch preview');
    }

    const data: MicrolinkResponse = await response.json();
    return data.data.screenshot?.url || data.data.image?.url || '';
  } catch (error) {
    console.error('Microlink error:', error);
    return '';
  }
}
