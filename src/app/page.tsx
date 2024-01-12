"use client"
import { Typewriter } from 'react-simple-typewriter'
import jainlogo from "../JainismLogo.svg";
import Image from 'next/image';
export default function Home() {
  const jainQuotes = [
    "Non-violence is the highest religion.",
    "Live and let live.",
    "The key to happiness is non-attachment.",
    "Truth is the foundation of a virtuous life.",
    "Respect all living beings.",
    "Forgiveness is the path to inner peace.",
    "Control your desires, and you will find contentment.",
    "Practice humility and kindness.",
    "The path of righteousness leads to liberation.",
    "See the soul, not the body.",
    "Be compassionate to all creatures.",
    "Silence is the best response to anger.",
    "Simplify your life for spiritual growth.",
    "Cultivate love and compassion.",
    "Detachment leads to spiritual progress.",
    "Do not harm, do not be harmed.",
    "Every soul is potentially divine.",
    "Be truthful, gentle, and fearless.",
    "Self-realization is the ultimate goal.",
    "Serve others selflessly.",
    "Avoid attachment to possessions.",
    "Practice mindfulness in all actions.",
    "Live a life of simplicity and purity.",
    "Develop self-discipline and self-control.",
    "Let go of ego and pride.",
    "Practice gratitude for every moment.",
    "See the divine in everyone.",
    "Speak only when necessary and with kindness.",
    "Embrace the path of non-possession.",
    "Infinite happiness is found within."
  ];

  const jainShlokas = [
    "अहिंसा परमो धर्मः, धर्म हिंसा तथैव च।",
    "सम्यग्दर्शन जीवजातं, सम्यग्ज्ञानं च तत्त्वजं।",
    "आर्यजन पञ्च परमेष्ठी, चक्रवर्तिनारायणो।",
    "श्री आदिनाथाय नमः, श्री पार्श्वनाथाय नमः।",
    "आत्मनो मोक्षार्थं जगद्धिताय च।",
    "आत्मसंयम परमो धर्मः, संयमेन परमं सुखम्।",
    "सम्यग्चित्तस्य युक्तस्य, योगो भवति दुःखहा।",
    "शान्तिदेव: सर्वजगतां, माध्यस्थितोऽखिलेशयः।",
    "सद्दर्मचारी सर्वजीवानां, हिताय निरतः सरःसम्पूर्णवत्सलः।",
    "परहितसर्वभूतानां, परत्रयाण न सस्मिन्।",
    "स्वदेहभृता भूतानां, परेण भूत गणानि च।",
    "योगेन चित्तस्य पदेन वाचां, मलं शरीरस्य च वैद्यकेन।",
    "योऽपाक्षीय सु दुचरं प्रवाणि, सु लब्धकामो भवति प्रगल्भः।",
    "जहात्याशां विसृजती सचित्तः, सतां पथो मार्गनयस्य यत्र।",
    "सत्यस्य पथो मार्गना प्रवृत्तिः, तामहं प्रपद्ये शरणागतिं।",
    "अतिथिदेवो भव: पितृदेवो भव: आचार्यदेवो भव:।",
    "धर्मो रक्षति रक्षितः, धर्मेच्छाद्धर्मात् परं सुखम्।",
    "सत्संगति परं सत्संगतिः, सत्संगतिर्निर्मोहनं निर्मोहनात् निश्चलतत्त्वं।",
    "अहो वीर्यं, अहो शौर्यं, अहो भूत्यं अहो बलम्।",
    "वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।",
    "दुःखेष्वनुद्विग्नमना: सुखेषु विगतस्पृहः।",
    "योगश्चित्तस्य पदेन वाचां, मलं शरीरस्य चैव वैद्यकेन।",
    "सुहृदां सर्वभूतानां, दयामादया तारया।",
    "सब्बपापसेय्यो, तारया समणो भवेय्यो।",
    "अहिंसा परमो धर्मः, धर्म हिंसा तथैव च।",
    "जयपरिग्रहिग्रामस्य, स्वयं योग्यस्य योग्यता।",
    "जयपरिग्रहिग्रामस्य, स्वयं योग्यस्य योग्यता।",
    "परस्परोपग्रहोपशमो वयं, जीवानामुक्तिरिति श्रुतिः।",
    "आत्मा सुखेन यस्यास्ति, तमाहुः पण्डितं बुधाः।"
  ];

  return (
    <main className='min-h-screen max-h-max flex flex-col items-center gap-y-10'>
      <header className='p-4 w-full'>
        <div className='flex gap-x-3 items-center w-full'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png" alt="logo" className='aspect-square' width={40} />
          <h2 className='text-2xl font-semibold'>JinvaniGPT</h2>
        </div>
      </header>
      <div className='w-full px-4'>
        <div className="mockup-window border bg-base-300">
          <div className="hero h-[70vh] bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className='flex justify-center'>
                  <Image src={jainlogo} alt="logo" width={100} className='pb-5 mix-blend-luminosity' />
                </div>
                <h1 className="text-5xl font-bold">Jai Jinendra</h1>
                <p className='text-sm font-semibold py-4'> Nurturing Solutions For Your Problems , by AI Chatbot Rooted in Jainism Wisdom. </p>
                <p className="py-6 text-lg tracking-wider">
                  <Typewriter 
                   words={jainShlokas}
                   delaySpeed={4000}
                   cursorBlinking={true}
                   deleteSpeed={50}
                   loop={false}
                   typeSpeed={100}
                  />
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
