/* =========================================================
   SAFESHIELD — PLAY & LEARN CONTENT
   One data file describing every topic's roadmap: its levels,
   each level's lesson, practice simulation, and quiz.

   Two topics are fully built out as the pilot: "password" and
   "phishing". The rest are present as placeholders so they show
   up on the hub as "Coming Soon" — filling in their `levels`
   array following the same shape is all that's needed to make
   them playable later.
========================================================= */

var GAME_TOPICS = {

    password: {
        title: "Password Protection",
        icon: "🔐",
        color: "#4f8cff",
        detailPage: "password.html",
        levels: [
            {
                id: "pw-1",
                title: "Why Weak Passwords Fail",
                lesson: [
                    "Attackers don't guess passwords one at a time — they run lists of billions of leaked passwords against every account they can find. This is called \"credential stuffing\".",
                    "Short passwords and common words can be cracked in seconds by automated tools.",
                    "Reusing one password means a single leak on any site can expose every other account that shares it."
                ],
                simulation: {
                    type: "password-strength",
                    prompt: "Try typing a password below and watch how it reacts in real time."
                },
                quiz: [
                    {
                        q: "What is \"credential stuffing\"?",
                        options: [
                            "Guessing a password by hand",
                            "Automatically trying leaked passwords across many accounts",
                            "A type of antivirus scan",
                            "A password recovery method"
                        ],
                        correct: 1
                    },
                    {
                        q: "Which of these is the strongest password?",
                        options: [
                            "password123",
                            "Sunshine1",
                            "correct-horse-battery-lamp",
                            "qwerty"
                        ],
                        correct: 2
                    },
                    {
                        q: "True or False: Reusing a password is fine as long as it's long.",
                        options: ["True", "False"],
                        correct: 1
                    },
                    {
                        q: "What's a good minimum length to aim for in a strong password?",
                        options: ["4 characters", "6 characters", "12+ characters", "It doesn't matter"],
                        correct: 2
                    }
                ]
            },
            {
                id: "pw-2",
                title: "Building a Strong Password",
                lesson: [
                    "Length beats cleverness — a longer password is generally harder to crack than a short one stuffed with symbols.",
                    "A passphrase of several random, unrelated words is easy for you to remember and hard for a computer to guess.",
                    "Avoid personal details — names, birthdays, or pet names are often guessable from social media."
                ],
                simulation: {
                    type: "password-strength",
                    prompt: "Try building a passphrase of 4 random words and see how the strength changes."
                },
                quiz: [
                    {
                        q: "Which is the better passphrase example?",
                        options: ["Password123!", "correct-horse-battery-staple", "Summer2024", "abc12345"],
                        correct: 1
                    },
                    {
                        q: "True or False: \"P@ssw0rd!\" is strong just because it swaps letters for symbols.",
                        options: ["True", "False"],
                        correct: 1
                    },
                    {
                        q: "Why does length matter more than complexity tricks?",
                        options: [
                            "It doesn't, complexity always wins",
                            "Longer passwords take exponentially longer to crack by brute force",
                            "Longer passwords are easier to type",
                            "It's just a personal preference"
                        ],
                        correct: 1
                    },
                    {
                        q: "Which personal detail should you avoid putting in a password?",
                        options: ["A random word", "Your birthday", "A made-up phrase", "An emoji"],
                        correct: 1
                    }
                ]
            },
            {
                id: "pw-3",
                title: "Password Managers & Uniqueness",
                lesson: [
                    "A password manager generates and remembers a unique, strong password for every single account.",
                    "You only need to remember one master password — the manager handles the rest.",
                    "Never store passwords in an unprotected notes app, spreadsheet, or plain text file."
                ],
                simulation: {
                    type: "decision-scenario",
                    scenarios: [
                        {
                            prompt: "You need a password for a brand new account. What do you do?",
                            choices: [
                                { text: "Reuse a password I already use elsewhere", correct: false, feedback: "Reusing a password means one leak can expose every account that shares it." },
                                { text: "Let a password manager generate a unique one", correct: true, feedback: "Exactly — unique, strong, and you don't have to remember it yourself." },
                                { text: "Slightly tweak an old password", correct: false, feedback: "A tweaked old password follows a pattern that's easy for attackers to guess once one version leaks." }
                            ]
                        }
                    ]
                },
                quiz: [
                    {
                        q: "What's the main benefit of a password manager?",
                        options: [
                            "It makes your internet faster",
                            "It generates and remembers unique passwords for you",
                            "It blocks all pop-ups",
                            "It's required by law"
                        ],
                        correct: 1
                    },
                    {
                        q: "True or False: Changing \"Password1\" to \"Password2\" makes it safe to reuse that pattern.",
                        options: ["True", "False"],
                        correct: 1
                    },
                    {
                        q: "Where should you avoid storing your passwords?",
                        options: ["A password manager", "An unprotected notes app", "Your memory", "None of these are safe"],
                        correct: 1
                    },
                    {
                        q: "With a password manager, how many master passwords do you need to remember?",
                        options: ["Zero", "One", "One per account", "It varies"],
                        correct: 1
                    }
                ]
            },
            {
                id: "pw-4",
                title: "Responding to a Breach",
                lesson: [
                    "If a service tells you it was breached, change that password immediately — don't wait.",
                    "Turn on two-factor authentication wherever it's offered, so a leaked password alone isn't enough to get in.",
                    "Never pay anyone who contacts you offering to \"clean up\" or \"secure\" a breached account — that's a follow-up scam."
                ],
                simulation: {
                    type: "checklist-select",
                    prompt: "You get a notice that one of your accounts may have been breached. Select every step you should actually take.",
                    options: [
                        { text: "Change the password on that account immediately", correct: true },
                        { text: "Enable two-factor authentication if it isn't on already", correct: true },
                        { text: "Ignore it, breaches happen all the time", correct: false },
                        { text: "Pay a stranger who messaged offering to \"fix\" it", correct: false }
                    ]
                },
                quiz: [
                    {
                        q: "What should you do first when notified of a breach?",
                        options: ["Wait a few weeks", "Change the password immediately", "Delete the account", "Nothing, it's not urgent"],
                        correct: 1
                    },
                    {
                        q: "True or False: You should pay a service that contacts you offering to \"clean\" your breached account.",
                        options: ["True", "False"],
                        correct: 1
                    },
                    {
                        q: "What extra protection limits the damage even if a password leaks?",
                        options: ["Two-factor authentication", "A longer username", "Turning off Wi-Fi", "Using incognito mode"],
                        correct: 0
                    },
                    {
                        q: "After a breach, should your new password be reused anywhere else?",
                        options: ["Yes, that's more convenient", "No, it should still be unique", "Only on similar sites", "It doesn't matter"],
                        correct: 1
                    }
                ]
            }
        ]
    },

    phishing: {
        title: "Phishing Scam",
        icon: "🎣",
        color: "#ef4444",
        detailPage: "phishing.html",
        levels: [
            {
                id: "ph-1",
                title: "Recognizing Phishing",
                lesson: [
                    "Phishing messages fake urgency — \"act now or lose access\" — to stop you from thinking it through.",
                    "They often use a generic greeting like \"Dear Customer\" instead of your real name.",
                    "Links usually lead somewhere that doesn't quite match the real company's website."
                ],
                simulation: {
                    type: "spot-flags",
                    prompt: "Tap every part of this message that looks suspicious.",
                    chunks: [
                        { text: "Dear Customer, ", flag: true },
                        { text: "we noticed unusual activity on your account. ", flag: false },
                        { text: "Your account will be suspended in 24 hours ", flag: true },
                        { text: "unless you verify your details now. ", flag: true },
                        { text: "Click here: ", flag: false },
                        { text: "http://secure-login-verify.com/account", flag: true }
                    ]
                },
                quiz: [
                    {
                        q: "Which detail is a common phishing red flag?",
                        options: ["A generic greeting like \"Dear Customer\"", "Your correct full name", "A support phone number", "A company logo"],
                        correct: 0
                    },
                    {
                        q: "Why do phishing messages create urgency?",
                        options: [
                            "To be polite",
                            "To stop you from thinking it through carefully",
                            "It's required by email providers",
                            "No real reason"
                        ],
                        correct: 1
                    },
                    {
                        q: "True or False: A link that looks slightly different from the real company's domain is a warning sign.",
                        options: ["True", "False"],
                        correct: 0
                    },
                    {
                        q: "What should you do with an unexpected attachment from an unclear sender?",
                        options: ["Open it right away", "Avoid opening it and verify first", "Forward it to friends", "Reply asking what it is"],
                        correct: 1
                    }
                ]
            },
            {
                id: "ph-2",
                title: "Checking Links & Senders",
                lesson: [
                    "Hover over a link (without clicking) to preview where it actually leads.",
                    "Check the sender's real email address, not just the display name — anyone can set a display name to \"Your Bank\".",
                    "Watch for misspelled domains that look almost right, like \"amaz0n.com\" or \"paypa1.com\"."
                ],
                simulation: {
                    type: "rapid-fire",
                    prompt: "Legit or Suspicious? Tap your answer for each sender.",
                    cards: [
                        { text: "support@paypal.com", answer: "legit" },
                        { text: "support@paypa1-secure.com", answer: "suspicious" },
                        { text: "billing@amaz0n-orders.com", answer: "suspicious" },
                        { text: "no-reply@yourbank.co.in", answer: "legit" }
                    ]
                },
                quiz: [
                    {
                        q: "What should you check instead of just the sender's display name?",
                        options: ["The email's font", "The sender's actual email address", "The time it was sent", "The subject line length"],
                        correct: 1
                    },
                    {
                        q: "Which of these looks like a spoofed domain?",
                        options: ["paypal.com", "paypa1.com", "google.com", "microsoft.com"],
                        correct: 1
                    },
                    {
                        q: "How can you preview where a link actually leads before clicking?",
                        options: ["Hover over it", "Guess", "Click it quickly then close it", "Ask a friend"],
                        correct: 0
                    },
                    {
                        q: "True or False: A display name is proof of who really sent an email.",
                        options: ["True", "False"],
                        correct: 1
                    }
                ]
            },
            {
                id: "ph-3",
                title: "What To Do When You Spot One",
                lesson: [
                    "Don't click any links or reply to the message.",
                    "Report it to your email provider, then delete it.",
                    "If it claims to be from a real company, go to their official site by typing the address yourself — never through the message's link."
                ],
                simulation: {
                    type: "decision-scenario",
                    scenarios: [
                        {
                            prompt: "You get a text: \"Your parcel has a pending delivery fee. Pay ₹49 here to release it.\" What do you do?",
                            choices: [
                                { text: "Click the link and pay quickly so it isn't held up", correct: false, feedback: "Delivery fee texts with payment links are a classic scam pattern." },
                                { text: "Ignore the link and check delivery status directly through the courier's official app or site", correct: true, feedback: "Right — verify independently instead of trusting the message's link." },
                                { text: "Reply asking them to confirm it's real", correct: false, feedback: "Replying just confirms your number is active and doesn't verify anything." }
                            ]
                        }
                    ]
                },
                quiz: [
                    {
                        q: "What's the safest first move when you spot a phishing message?",
                        options: ["Click to see what happens", "Don't click, don't reply", "Forward it to friends", "Reply and ask questions"],
                        correct: 1
                    },
                    {
                        q: "How should you check a claim from a \"real company\"?",
                        options: [
                            "Use the link in the message",
                            "Type the company's address yourself in your browser",
                            "Call the number given in the message",
                            "Trust it if the logo looks right"
                        ],
                        correct: 1
                    },
                    {
                        q: "What should you do with the message after reporting it?",
                        options: ["Keep it in case it's real", "Delete it", "Reply to it", "Print it"],
                        correct: 1
                    },
                    {
                        q: "True or False: Replying to confirm suspicion is a safe way to check.",
                        options: ["True", "False"],
                        correct: 1
                    }
                ]
            },
            {
                id: "ph-4",
                title: "If You Already Clicked",
                lesson: [
                    "Change the password for that account immediately, and anywhere else it was reused.",
                    "Turn on two-factor authentication if it isn't already active.",
                    "Keep an eye on the account's activity for anything unfamiliar over the next few weeks."
                ],
                simulation: {
                    type: "checklist-select",
                    prompt: "You clicked a phishing link and entered your password. Select every step you should take now.",
                    options: [
                        { text: "Change the password on that account right away", correct: true },
                        { text: "Enable two-factor authentication", correct: true },
                        { text: "Pay a follow-up message offering to \"secure\" the account", correct: false },
                        { text: "Do nothing, since it might not be a big deal", correct: false }
                    ]
                },
                quiz: [
                    {
                        q: "After clicking a phishing link and entering your password, what's the priority?",
                        options: ["Wait and see", "Change the password immediately", "Uninstall your browser", "Nothing, it's fine"],
                        correct: 1
                    },
                    {
                        q: "What extra step helps protect the account going forward?",
                        options: ["Two-factor authentication", "A longer email signature", "Turning off notifications", "Clearing your desktop"],
                        correct: 0
                    },
                    {
                        q: "True or False: You should pay anyone who messages offering to fix a compromised account.",
                        options: ["True", "False"],
                        correct: 1
                    },
                    {
                        q: "Besides changing the password, what else is worth doing?",
                        options: [
                            "Monitoring the account for unfamiliar activity",
                            "Deleting all your other accounts",
                            "Changing your phone number",
                            "Nothing else is needed"
                        ],
                        correct: 0
                    }
                ]
            }
        ]
    },

    /* ---------- Coming soon: same shape, empty levels ---------- */

    bank:           { title:"Bank Scam",              icon:"🏦", color:"#4f8cff", detailPage:"bank.html",           levels: [] },
    prize:          { title:"Prize Scam",             icon:"🎁", color:"#f59e0b", detailPage:"prize.html",          levels: [] },
    job:            { title:"Job Scam",               icon:"💼", color:"#4f8cff", detailPage:"job.html",            levels: [] },
    romance:        { title:"Romance Scam",           icon:"💌", color:"#ef4444", detailPage:"romance.html",        levels: [] },
    delivery:       { title:"Delivery Scam",          icon:"📦", color:"#f59e0b", detailPage:"delivery.html",       levels: [] },
    investment:     { title:"Investment Scam",        icon:"📈", color:"#22d3a7", detailPage:"investment.html",     levels: [] },
    tech:           { title:"Tech Support Scam",      icon:"🖥️", color:"#4f8cff", detailPage:"tech.html",           levels: [] },
    media:          { title:"Social Media Scam",      icon:"📱", color:"#ef4444", detailPage:"media.html",          levels: [] },
    QR:             { title:"QR Code Scam",           icon:"📷", color:"#f59e0b", detailPage:"QR.html",             levels: [] },
    upi:            { title:"UPI Payment Scam",       icon:"💳", color:"#22d3a7", detailPage:"upi.html",            levels: [] },
    impersonation:  { title:"Impersonation Scam",     icon:"🎭", color:"#ef4444", detailPage:"impersonation.html",  levels: [] },
    "2FA":          { title:"Two-Factor Authentication", icon:"🔑", color:"#4f8cff", detailPage:"2FA.html",         levels: [] },
    devices:        { title:"Device Security",        icon:"📴", color:"#22d3a7", detailPage:"devices.html",        levels: [] },
    backupdata:     { title:"Backup Your Data",       icon:"💾", color:"#4f8cff", detailPage:"backupdata.html",     levels: [] },
    verify_website: { title:"Verify Websites",        icon:"🔍", color:"#22d3a7", detailPage:"verify_website.html", levels: [] },
    stop_phishing:  { title:"Stop Phishing",          icon:"🛑", color:"#ef4444", detailPage:"stop_phishing.html",  levels: [] }
};

/* Order the hub grid is displayed in */
var GAME_TOPIC_ORDER = [
    "password","phishing","bank","prize","job","romance","delivery",
    "investment","tech","media","QR","upi","impersonation",
    "2FA","devices","backupdata","verify_website","stop_phishing"
];
