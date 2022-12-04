export default {
    // These are app level configs.
    lang: 'en-US',
    title: 'Tecstek',
    description: 'A library of popular tech stacks',

    // Theme related configurations.
    themeConfig: {
        logo: '/logo.svg',
        sidebar: [
            {
                text: 'Domains',
                items: [
                    { text: 'Database', link: '/database/' },
                    { text: 'Web Frontend', link: '/web/' },
                    { text: 'Mobile Frontend', link: '/mobile/' },
                    { text: 'Queue', link: '/queue/' },
                ]
            }
        ],
        footer: {
            copyright: 'Copyright © 2022-present Tecstek'
        }
    }
}