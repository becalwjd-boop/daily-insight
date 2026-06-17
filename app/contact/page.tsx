export default function ContactPage() {
    return (
        <main style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>
            <h1>Contact</h1>

            <p>
                <strong>Daily Insight News</strong> is operated by Daily Insight Studio.
            </p>

            <p>
                Daily Insight News provides curated links to publicly available news
                articles from third-party news providers. We do not create original news
                content.
            </p>

            <h2>Operator</h2>
            <p>Daily Insight Studio</p>

            <h2>Contact Email</h2>
            <p>
                <a href="mailto:becalwjd@gmail.com">becalwjd@gmail.com</a>
            </p>

            <h2>Website</h2>
            <p>
                <a href="https://daily-insight-blush.vercel.app">
                    https://daily-insight-blush.vercel.app
                </a>
            </p>

            <h2>Content Source</h2>
            <p>
                News articles are collected and organized through the Naver News Search
                API. Each article links to its original source.
            </p>
        </main>
    );
}