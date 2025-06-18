import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Myvault',
        short_name: 'Myvault',
        description: 'Myvault',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#202020',
        theme_color: '#202020',
        lang: "En-en",
        display_override: ["fullscreen", "minimal-ui", "standalone"],
    }
}