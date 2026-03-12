import "./App.css";

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Privacy Policy</h1>
        <p>This page explains how we collect, use, and protect your data.</p>
      </header>

      <section className="card">
        <div className="card-header">
          <div>
            <h2>Policy text</h2>
            <p className="card-subtitle">Please read this policy carefully.</p>
          </div>
        </div>
        <article className="policy-text">
          {/* Replace the text inside these elements with your real privacy policy */}
          <p>
            ​1. Privacy Policy Template ​Effective Date: March 11, 2026
            ​Introduction ​This Privacy Policy explains how we collect, use, and
            protect your information when you use our mobile application (the
            "App"). By using the App, you agree to the collection and use of
            information in accordance with this policy. ​Information Collection
            and Use ​We may collect several different types of information for
            various purposes to provide and improve our service to you:
            <br />
            ​Personal Data: While using our App, we may ask you to provide us
            with certain personally identifiable information, such as your email
            address, name, or phone number.
            <br /> ​Usage Data: We may collect information on how the App is
            accessed and used, including your device's Internet Protocol address
            (IP address), browser type, and time spent on the App. ​Data
            Protection ​We value your trust in providing us with your Personal
            Information, and we are striving to use commercially acceptable
            means of protecting it. However, remember that no method of
            transmission over the internet or method of electronic storage is
            100% secure. ​Third-Party Services ​The App may use third-party
            services that collect information used to identify you (e.g., Google
            Play Services, AdMob, or Firebase Analytics). We encourage you to
            review their respective privacy policies.
            <br /> ​Changes to This Privacy Policy ​We may update our Privacy
            Policy from time to time. You are advised to review this page
            periodically for any changes. ​2. Copyright & Terms of Use
            ​Intellectual Property Rights ​All content, features, and
            functionality within this App—including but not limited to text,
            graphics, logos, icons, images, and software—are the exclusive
            property of [NJ Filters, LLC] and are protected by international
            copyright, trademark, patent, and other intellectual property laws.
            <br /> ​License to Use ​We grant you a personal, non-exclusive,
            non-transferable, limited license to download and use the App for
            personal, non-commercial purposes strictly in accordance with the
            terms of this license. ​Restrictions ​You agree not to: ​Copy,
            modify, or create derivative works based on the App. ​Reverse
            engineer, decompile, or disassemble any part of the App. ​Remove any
            copyright or other proprietary notices from the App. ​Disclaimer of
            Warranty ​The App is provided "AS IS" and "AS AVAILABLE" without any
            warranty of any kind, express or implied. Use of the App is at your
            sole risk.
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;
