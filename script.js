// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize sticky header
    initStickyHeader();
    
    // Initialize active nav highlighting
    initActiveNavHighlighting();
    
    
    // Initialize form submission
    initFormSubmission();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation collapse on click
    initNavCollapse();
    
    // Initialize AI Assistant
    initAIAssistant();

    // Render skills and unified portfolio (no filters)
    renderSkillsFromData();
    renderPortfolioCombined();
    
});

// Typing effect for the hero section
function initTypingEffect() {
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const words = ['Developer', 'Designer', 'Engineer', 'Problem Solver'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            
            typingElement.textContent = currentChar;
            
            if (!isDeleting && charIndex < currentWord.length) {
                // Type the word
                charIndex++;
                setTimeout(type, 100);
            } else if (isDeleting && charIndex > 0) {
                // Delete the word
                charIndex--;
                setTimeout(type, 50);
            } else {
                // Switch to the next word
                isDeleting = !isDeleting;
                
                if (!isDeleting) {
                    wordIndex = (wordIndex + 1) % words.length;
                }
                
                setTimeout(type, 1000);
            }
        }
        
        type();
    }
}

// Mobile navigation functionality
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Sticky header functionality
function initStickyHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Active navigation highlighting
function initActiveNavHighlighting() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Project filtering functionality
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const active = document.querySelector('.filter-btn.active');
    if (active) active.click();
}

// Form submission functionality
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show a success message (in a real application, you'd do this after the server responds)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations functionality
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.skill-level, .project-card, .timeline-item');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

// Navigation collapse on click
function initNavCollapse() {
    const navLinks = document.querySelectorAll('.menu .link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Force blur to remove focus and trigger collapse
            this.blur();
        });
    });
}

// AI Assistant (Abby)
function initAIAssistant() {
    const aiAssistant = document.getElementById('ai-assistant');
    const aiChat = document.getElementById('ai-chat');
    const settingsBtn = document.querySelector('.ai-settings-btn');
    const settingsPanel = document.getElementById('ai-settings-panel');
    const settingsClose = document.querySelector('.ai-settings-close');
    const chatClose = document.querySelector('.ai-chat-close');
    const quickReplies = document.querySelectorAll('.ai-quick-reply');
    const sendBtn = document.getElementById('ai-send-btn');
    const inputField = document.getElementById('ai-input');
    const chatMessages = document.getElementById('ai-chat-messages');
    
    if (!aiAssistant) return;
    
    // Toggle chat on assistant click
    aiAssistant.addEventListener('click', function(e) {
        if (e.target === settingsBtn || e.target.closest('.ai-settings-btn')) {
            return; // Don't toggle if clicking settings
        }
        
        if (aiChat.style.display === 'none' || !aiChat.style.display) {
            aiChat.style.display = 'flex';
            aiAssistant.style.display = 'none';
        }
    });
    
    // Close chat
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            aiChat.style.display = 'none';
            aiAssistant.style.display = 'flex';
        });
    }
    
    // Handle quick replies
    quickReplies.forEach(btn => {
        btn.addEventListener('click', function() {
            const reply = this.getAttribute('data-reply');
            handleQuickReply(reply);
        });
    });
    
    // Handle send button
    if (sendBtn && inputField) {
        sendBtn.addEventListener('click', function() {
            const message = inputField.value.trim();
            if (message) {
                addUserMessage(message);
                inputField.value = '';
                // Simulate AI response
                setTimeout(() => {
                    handleUserMessage(message);
                }, 500);
            }
        });
        
        // Handle Enter key
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
    
    // Settings panel
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            settingsPanel.style.display = 'block';
            showLoginScreen();
        });
    }
    
    // Keyboard shortcut for admin access (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            settingsPanel.style.display = 'block';
            showLoginScreen();
        }
    });
    
    // Admin login functionality
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminPasswordInput = document.getElementById('admin-password');
    const loginError = document.getElementById('login-error');
    const adminLogin = document.getElementById('admin-login');
    const adminOptions = document.getElementById('admin-options');
    const logoutBtn = document.getElementById('logout-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    
    if (adminLoginBtn && adminPasswordInput) {
        adminLoginBtn.addEventListener('click', function() {
            checkAdminPassword();
        });
        
        adminPasswordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAdminPassword();
            }
        });
    }
    
    function checkAdminPassword() {
        const password = adminPasswordInput.value;
        if (password === 'Ragno@3103') {
            loginError.style.display = 'none';
            adminLogin.style.display = 'none';
            adminOptions.style.display = 'block';
            adminPasswordInput.value = '';
        } else {
            loginError.style.display = 'block';
            adminPasswordInput.value = '';
            adminPasswordInput.focus();
        }
    }
    
    function showLoginScreen() {
        adminLogin.style.display = 'block';
        adminOptions.style.display = 'none';
        loginError.style.display = 'none';
        adminPasswordInput.value = '';
        setTimeout(() => {
            adminPasswordInput.focus();
        }, 100);
    }
    
    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            showLoginScreen();
        });
    }
    
    // Save settings functionality
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            // Save all settings to localStorage
            const settings = {
                // Personal Info
                name: document.getElementById('user-name').value,
                birthdate: document.getElementById('user-birthdate').value,
                email: document.getElementById('user-email').value,
                phone: document.getElementById('user-phone').value,
                aboutMe: document.getElementById('about-me').value,
                position: document.getElementById('user-position').value,
                university: document.getElementById('user-university').value,
                // Guard missing optional fields
                skills: (document.getElementById('user-skills') ? document.getElementById('user-skills').value : ''),
                hobbies: document.getElementById('user-hobbies').value,
                quote: document.getElementById('user-quote').value,
                // AI Settings
                aiEnabled: document.getElementById('ai-enabled').checked,
                greeting: document.getElementById('ai-greeting').checked,
                jokes: document.getElementById('ai-jokes').checked,
                quickReplies: document.getElementById('quick-replies').checked,
                autoScroll: document.getElementById('auto-scroll').checked,
                responseStyle: document.getElementById('response-style').value,
                animationSpeed: document.getElementById('animation-speed').value
            };
            localStorage.setItem('aiAssistantSettings', JSON.stringify(settings));
            
            // Show success message
            const originalText = saveSettingsBtn.textContent;
            saveSettingsBtn.textContent = '✓ Settings Saved Successfully!';
            saveSettingsBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                saveSettingsBtn.textContent = originalText;
            }, 2000);
        });
    }
    
    // Load saved settings
    function loadSettings() {
        const savedSettings = localStorage.getItem('aiAssistantSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            // Personal Info
            if (settings.name) document.getElementById('user-name').value = settings.name;
            if (settings.birthdate) document.getElementById('user-birthdate').value = settings.birthdate;
            if (settings.email) document.getElementById('user-email').value = settings.email;
            if (settings.phone) document.getElementById('user-phone').value = settings.phone;
            if (settings.aboutMe) document.getElementById('about-me').value = settings.aboutMe;
            if (settings.position) document.getElementById('user-position').value = settings.position;
            if (settings.university) document.getElementById('user-university').value = settings.university;
            if (settings.skills && document.getElementById('user-skills')) document.getElementById('user-skills').value = settings.skills;
            if (settings.hobbies) document.getElementById('user-hobbies').value = settings.hobbies;
            if (settings.quote) document.getElementById('user-quote').value = settings.quote;
            // AI Settings
            document.getElementById('ai-enabled').checked = settings.aiEnabled !== false;
            document.getElementById('ai-greeting').checked = settings.greeting !== false;
            document.getElementById('ai-jokes').checked = settings.jokes !== false;
            document.getElementById('quick-replies').checked = settings.quickReplies !== false;
            document.getElementById('auto-scroll').checked = settings.autoScroll !== false;
            if (settings.responseStyle) document.getElementById('response-style').value = settings.responseStyle;
            if (settings.animationSpeed) document.getElementById('animation-speed').value = settings.animationSpeed;
        }
    }
    
    loadSettings();
    
    // Close settings panel
    if (settingsClose) {
        settingsClose.addEventListener('click', function() {
            settingsPanel.style.display = 'none';
        });
    }
    
    // Close settings panel when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === settingsPanel) {
            settingsPanel.style.display = 'none';
        }
    });
}

// Add user message to chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ai-message-user';
    messageDiv.innerHTML = `<div class="ai-message-content">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
    const chatMessages = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ai-message-bot';
    messageDiv.innerHTML = `<div class="ai-message-content">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get user settings
function getUserSettings() {
    const savedSettings = localStorage.getItem('aiAssistantSettings');
    if (savedSettings) {
        return JSON.parse(savedSettings);
    }
    return {};
}

// Get jokes array
function getJokes() {
    return [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "Why do Java developers wear glasses? Because they don't C#! 😎",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 🍻",
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25! 🎃🎄",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why did the programmer quit his job? Because he didn't get arrays! 😄",
        "What's a programmer's favorite hangout place? Foo Bar! 🍺",
        "Why did the developer go broke? Because he used up all his cache! 💰",
        "What do you call 8 hobbits? A hobbyte! 🧙‍♂️",
        "Why do programmers hate nature? It has too many bugs! 🌿🐛"
    ];
}

// Get random joke
function getRandomJoke() {
    const jokes = getJokes();
    return jokes[Math.floor(Math.random() * jokes.length)];
}

// Calculate age from birthdate
function calculateAge(birthdate) {
    if (!birthdate) return null;
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Handle quick reply buttons
function handleQuickReply(reply) {
    const settings = getUserSettings();
    let userMsg = '';
    let botResponse = '';
    
    switch(reply) {
        case 'about':
            userMsg = 'Tell me about Anshul';
            if (settings.aboutMe && settings.aboutMe.trim()) {
                botResponse = settings.aboutMe;
            } else {
                const name = settings.name || 'Anshul Mahajan';
                const position = settings.position || '2nd year Computer Science Engineering student';
                const university = settings.university || 'Smt. Kashibai Navle College of Engineering, Pune';
                botResponse = `${name} is a passionate ${position} at ${university}. He's dedicated to developing innovative solutions and has strong analytical skills!`;
            }
            break;
        case 'skills':
            userMsg = 'What are his skills?';
            if (settings.skills && settings.skills.trim()) {
                const skillsList = settings.skills.split(',').map(s => s.trim()).join(', ');
                botResponse = `${settings.name || 'Anshul'} has expertise in: ${skillsList}. Pretty impressive, right? 🚀`;
            } else {
                botResponse = "Anshul has expertise in various areas including web development, programming, and engineering. You can explore his complete skill set in the Skills section. Would you like me to take you there?";
            }
            break;
        case 'projects':
            userMsg = 'Show me projects';
            botResponse = `${settings.name || 'Anshul'} has worked on several exciting projects including web development, robotics, and engineering solutions. Let me scroll you to the Projects section! 🚀`;
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
            break;
        case 'contact':
            userMsg = 'Contact info';
            const email = settings.email || 'mahajananshul100@gmail.com';
            const phone = settings.phone || '';
            botResponse = `You can reach ${settings.name || 'Anshul'} at ${email}${phone ? ' or call at ' + phone : ''}. He's also active on LinkedIn, GitHub, Instagram, and Discord. Check out the Contact section for all social links! 📧`;
            break;
        case 'birthday':
            userMsg = 'When is his birthday?';
            if (settings.birthdate) {
                const date = new Date(settings.birthdate);
                const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                botResponse = `${settings.name || 'Anshul'}'s birthday is on ${formatted}. 🎂`;
            } else {
                botResponse = "I don't have the birthday saved yet. Add it in Admin > Personal Info.";
            }
            break;
        case 'birthdate':
            userMsg = 'What is his birthdate?';
            if (settings.birthdate) {
                const date = new Date(settings.birthdate);
                const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                botResponse = `${settings.name || 'Anshul'}'s birthdate is ${formatted}. 🗓️`;
            } else {
                botResponse = "I don't have the birthdate saved yet. Add it in Admin > Personal Info.";
            }
            break;
    }
    
    addUserMessage(userMsg);
    setTimeout(() => {
        addBotMessage(botResponse);
    }, 500);
}

// Handle user messages
function handleUserMessage(message) {
    const lowerMsg = message.toLowerCase();
    const settings = getUserSettings();
    const jokesEnabled = settings.jokes !== false;
    let response = '';
    
    // Jokes and fun responses
    if (lowerMsg.includes('joke') || lowerMsg.includes('funny')) {
        if (jokesEnabled) {
            response = getRandomJoke();
        } else {
            response = "I'd love to tell you a joke, but the admin has disabled my sense of humor! 😅";
        }
    }
    // Name questions
    else if (lowerMsg.includes('your name') || lowerMsg.includes('who are you')) {
        response = "I'm Abby, your friendly AI assistant! 🤖 I'm here to help you learn all about " + (settings.name || 'Anshul') + "'s amazing portfolio. What would you like to know?";
    }
    // Age questions
    else if (lowerMsg.includes('age') || lowerMsg.includes('old')) {
        if (settings.birthdate) {
            const age = calculateAge(settings.birthdate);
            response = `${settings.name || 'Anshul'} is ${age} years old! 🎂`;
        } else {
            response = "I don't have that information right now. Ask me something else! 😊";
        }
    }
    // Birthday questions
    else if (lowerMsg.includes('birthday') || lowerMsg.includes('born') || lowerMsg.includes('birthdate') || lowerMsg.includes('dob')) {
        if (settings.birthdate) {
            const date = new Date(settings.birthdate);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            response = `${settings.name || 'Anshul'} was born on ${date.toLocaleDateString('en-US', options)}! 🎉`;
        } else {
            response = "I don't have that information saved yet. The admin can add it in the settings! 🎂";
        }
    }
    // Hobbies
    else if (lowerMsg.includes('hobbies') || lowerMsg.includes('hobby') || lowerMsg.includes('interest')) {
        if (settings.hobbies && settings.hobbies.trim()) {
            response = `${settings.name || 'Anshul'} enjoys ${settings.hobbies}! Sounds fun, right? 🎮`;
        } else {
            response = "I don't have specific hobbies information right now, but you can explore the About section to learn more! 🎯";
        }
    }
    // Quote
    else if (lowerMsg.includes('quote') || lowerMsg.includes('motivation')) {
        if (settings.quote && settings.quote.trim()) {
            response = `Here's ${settings.name || 'Anshul'}'s favorite quote: "${settings.quote}" 💭`;
        } else {
            response = "Success is not final, failure is not fatal: it is the courage to continue that counts. 💪";
        }
    }
    // About
    else if (lowerMsg.includes('about') || lowerMsg.includes('who')) {
        if (settings.aboutMe && settings.aboutMe.trim()) {
            response = settings.aboutMe + " 🌟";
        } else {
            const name = settings.name || 'Anshul Mahajan';
            const position = settings.position || '2nd year Computer Science Engineering student';
            response = `${name} is a ${position} passionate about technology and innovation. 🚀`;
        }
    }
    // Skills
    else if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech')) {
        if (settings.skills && settings.skills.trim()) {
            const skillsList = settings.skills.split(',').map(s => s.trim()).join(', ');
            response = `${settings.name || 'Anshul'} is skilled in: ${skillsList}. Check out the Skills section to see more! 💻`;
        } else {
            response = "Anshul has diverse skills in programming, web development, and engineering. Check out the Skills section to see his complete technical expertise! 💻";
        }
    }
    // Projects
    else if (lowerMsg.includes('project')) {
        response = `${settings.name || 'Anshul'} has worked on various projects including web applications and robotics. Let me take you to the Projects section! 🚀`;
        setTimeout(() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    }
    // Education
    else if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('university') || lowerMsg.includes('college')) {
        const university = settings.university || 'Smt. Kashibai Navle College of Engineering, Pune';
        const position = settings.position || 'Bachelor of Engineering in Computer Science';
        response = `${settings.name || 'Anshul'} is currently pursuing ${position} at ${university}. 🎓`;
    }
    // Contact
    else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach') || lowerMsg.includes('phone')) {
        const email = settings.email || 'mahajananshul100@gmail.com';
        const phone = settings.phone || '';
        response = `You can contact ${settings.name || 'Anshul'} at ${email}${phone ? ' or call at ' + phone : ''}! Also check out the social media links in the Contact section. 📱`;
    }
    // Greetings
    else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        const greetings = [
            `Hello! 👋 I'm Abby, ${settings.name || 'Anshul'}'s personal AI guide. How can I help you today?`,
            `Hey there! 😊 Welcome! What would you like to know about ${settings.name || 'Anshul'}?`,
            `Hi! 🌟 Great to see you! Ask me anything about ${settings.name || 'Anshul'}'s portfolio!`
        ];
        response = greetings[Math.floor(Math.random() * greetings.length)];
    }
    // Thank you
    else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
        const thanks = [
            "You're welcome! 😊 Anything else you'd like to know?",
            "Happy to help! Feel free to ask more questions! 🌟",
            "No problem at all! What else can I help you with? 💫"
        ];
        response = thanks[Math.floor(Math.random() * thanks.length)];
    }
    // How are you
    else if (lowerMsg.includes('how are you')) {
        const responses = [
            "I'm doing great! Thanks for asking! 😊 How can I help you today?",
            "I'm fantastic! Ready to answer all your questions! 🌟",
            "Couldn't be better! What would you like to know? 💫"
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
    }
    // Default response
    else {
        response = "I'm here to help you learn about " + (settings.name || 'Anshul') + "! You can ask me about skills, projects, education, hobbies, contact info, or even ask for a joke! 😄 What would you like to know?";
    }
    
    addBotMessage(response);
}

// Admin Panel Functions
function initAdminPanel() {
    const settingsPanel = document.getElementById('ai-settings-panel');
    const adminMinimized = document.getElementById('admin-minimized');
    const minimizeBtn = document.querySelector('.ai-minimize-btn');
    const maximizeBtn = document.querySelector('.ai-maximize-btn');
    const restoreBtn = document.querySelector('.restore-btn');
    
    // Minimize functionality
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function() {
            settingsPanel.style.display = 'none';
            adminMinimized.style.display = 'flex';
        });
    }
    
    // Restore functionality
    if (restoreBtn || adminMinimized) {
        const restore = () => {
            adminMinimized.style.display = 'none';
            settingsPanel.style.display = 'flex';
        };
        
        if (restoreBtn) restoreBtn.addEventListener('click', restore);
        if (adminMinimized) adminMinimized.addEventListener('click', restore);
    }
    
    // Tab switching
    const tabs = document.querySelectorAll('.admin-tab');
    const tabContents = document.querySelectorAll('.admin-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById('tab-' + targetTab).classList.add('active');
        });
    });
    
    // Content managers removed from admin mode (read-only, no admin lists)
    
    // Certificates admin removed
}

// Certificates Manager
function initCertificatesManager() {
    loadCertificates();
    displayCertificates(); // Add this to display certificates on page load
}

function loadCertificates() {
    const certsList = document.getElementById('certificates-list');
    const certs = getCertificatesData();
    
    if (certs.length === 0) {
        certsList.innerHTML = '<p style="color: var(--text-color); text-align: center; padding: 20px;">No certificates available.</p>';
        return;
    }
    
    certsList.innerHTML = certs.map(cert => `
        <div class="item-card" data-id="${cert.id}">
            <div class="item-card-header">
                <div class="item-card-title">${cert.name}</div>
            </div>
            <div class="item-card-body">
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
                <p><strong>Date:</strong> ${cert.date}</p>
                ${cert.description ? `<p><strong>Description:</strong> ${cert.description}</p>` : ''}
                ${cert.link ? `<p><strong>Link:</strong> <a href="${cert.link}" target="_blank" style="color: var(--primary-color);">View Certificate</a></p>` : ''}
                ${cert.image ? `<p><strong>Image:</strong> <img src="${cert.image}" alt="Certificate" style="max-width: 100px; max-height: 100px; margin-top: 10px; border-radius: 5px;"></p>` : ''}
            </div>
        </div>
    `).join('');
}

// Function to display certificates in the public view
function displayCertificates() {
    const certsGrid = document.querySelector('.certificates-grid');
    const certs = getCertificatesData();
    
    if (!certsGrid) return;
    
    if (certs.length === 0) {
        certsGrid.innerHTML = '<p style="color: var(--text-color); text-align: center; grid-column: 1 / -1; padding: 40px;">No certificates added yet.</p>';
        return;
    }
    
    certsGrid.innerHTML = certs.map(cert => `
        <div class="certificate-card">
            <div class="certificate-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <div class="certificate-content">
                <h4>${cert.name}</h4>
                <p class="certificate-issuer">Issued by: ${cert.issuer}</p>
                <p class="certificate-date"><i class="far fa-calendar-alt"></i> ${cert.date}</p>
                ${cert.description ? `<p class="certificate-desc">${cert.description}</p>` : ''}
                ${cert.link ? `<a href="${cert.link}" class="certificate-link" target="_blank"><i class="fas fa-external-link-alt"></i> View Certificate</a>` : ''}
                ${cert.image ? `<img src="${cert.image}" alt="${cert.name}" class="certificate-image">` : ''}
            </div>
        </div>
    `).join('');
}


function getCertificatesData() {
    const data = localStorage.getItem('portfolioCertificates');
    return data ? JSON.parse(data) : [];
}

function saveCertificatesData(certs) {
    localStorage.setItem('portfolioCertificates', JSON.stringify(certs));
}

// Skills Manager
function initSkillsManager() {
    loadSkills();
}

function loadSkills() {
    const skillsList = document.getElementById('skills-list');
    const skills = getSkillsData();
    
    if (skills.length === 0) {
        skillsList.innerHTML = '<p style="color: var(--text-color); text-align: center; padding: 20px;">No skills available.</p>';
        return;
    }
    
    // Group skills by category
    const skillsByCategory = {};
    skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });
    
    // Generate HTML for each category
    let html = '';
    for (const category in skillsByCategory) {
        html += `<div class="skills-category-group">
            <h4 class="skills-category-title">${category}</h4>
            <div class="skills-category-items">`;
        
        skillsByCategory[category].forEach(skill => {
            html += `
                <div class="item-card" data-id="${skill.id}">
                    <div class="item-card-header">
                        <div class="item-card-title">${skill.name}</div>
                    </div>
                    <div class="item-card-body">
                        <p><strong>Level:</strong> ${skill.level}%</p>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
    }
    
    skillsList.innerHTML = html;
}

function getSkillsData() {
    const data = localStorage.getItem('portfolioSkills');
    return data ? JSON.parse(data) : [];
}

function saveSkillsData(skills) {
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
}

// Projects Manager
function initProjectsManager() {
    loadProjects();
}

function loadProjects() {
    const projectsList = document.getElementById('projects-list');
    const projects = getProjectsData();
    
    if (projects.length === 0) {
        projectsList.innerHTML = '<p style="color: var(--text-color); text-align: center; padding: 20px;">No projects available.</p>';
        return;
    }
    
    projectsList.innerHTML = projects.map(project => `
        <div class="item-card" data-id="${project.id}">
            <div class="item-card-header">
                <div class="item-card-title">${project.name}</div>
            </div>
            <div class="item-card-body">
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <p><strong>Category:</strong> ${project.category}</p>
                ${project.link ? `<p><strong>Link:</strong> <a href="${project.link}" target="_blank" style="color: var(--primary-color);">View Project</a></p>` : ''}
                ${project.image ? `<p><strong>Image:</strong> <img src="${project.image}" alt="Project" style="max-width: 100px; max-height: 100px; margin-top: 10px; border-radius: 5px;"></p>` : ''}
            </div>
        </div>
    `).join('');
}

function getProjectsData() {
    const data = localStorage.getItem('portfolioProjects');
    return data ? JSON.parse(data) : [];
}

function saveProjectsData(projects) {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
}

// Utility functions for image handling
function validateImageFile(file) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (JPG, PNG, GIF).');
        return false;
    }
    
    if (file.size > maxSize) {
        alert('File size exceeds 5MB limit.');
        return false;
    }
    
    return true;
}

function previewImage(file, container) {
    const reader = new FileReader();
    reader.onload = function(e) {
        container.innerHTML = `<img src="${e.target.result}" alt="Preview" class="image-preview">`;
    };
    reader.readAsDataURL(file);
}

// AI Assistant (Abby)





// Render Skills from PORTFOLIO_DATA
function renderSkillsFromData() {
    const data = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.skills) || null;
    const container = document.querySelector('#skills .skills-content');
    if (!data || !container) return;

    // Clear existing content and rebuild from data
    container.innerHTML = '';
    data.forEach(cat => {
        const catEl = document.createElement('div');
        catEl.className = 'skill-category';

        const h3 = document.createElement('h3');
        h3.textContent = cat.category || 'Skills';
        catEl.appendChild(h3);

        if (Array.isArray(cat.bars) && cat.bars.length) {
            const items = document.createElement('div');
            items.className = 'skill-items';
            cat.bars.forEach(b => {
                const item = document.createElement('div');
                item.className = 'skill-item';
                const name = document.createElement('div');
                name.className = 'skill-name';
                name.textContent = b.name;
                const bar = document.createElement('div');
                bar.className = 'skill-bar';
                const level = document.createElement('div');
                level.className = 'skill-level';
                const pct = Math.max(0, Math.min(100, Number(b.level || 0)));
                level.style.width = pct + '%';
                bar.appendChild(level);
                item.appendChild(name);
                item.appendChild(bar);
                items.appendChild(item);
            });
            catEl.appendChild(items);
        }

        if (Array.isArray(cat.tags) && cat.tags.length) {
            const tags = document.createElement('div');
            tags.className = 'skill-tags';
            cat.tags.forEach(t => {
                const tag = document.createElement('span');
                tag.className = 'skill-tag';
                tag.textContent = t;
                tags.appendChild(tag);
            });
            catEl.appendChild(tags);
        }

        container.appendChild(catEl);
    });
}

// Render Certificates from PORTFOLIO_DATA and localStorage into unified grid
function renderCertificatesFromData() {
    const staticCerts = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.certificates) || [];
    const localCerts = JSON.parse(localStorage.getItem('portfolioCertificates') || '[]');
    const certs = [...staticCerts, ...localCerts];
    const grid = document.querySelector('#projects .projects-grid');
    if (!grid || certs.length === 0) return;

    certs.forEach(c => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', 'certificate');

        const imgWrap = document.createElement('div');
        imgWrap.className = 'project-img';
        const img = document.createElement('img');
        img.src = (c.image || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.images && window.PORTFOLIO_DATA.images.projectPlaceholder)) || '../images/project-placeholder.jpg';
        img.alt = c.title || 'Certificate';
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);

        const info = document.createElement('div');
        info.className = 'project-info';
        const h3 = document.createElement('h3');
        h3.innerHTML = '<i class="fas fa-certificate"></i> ' + (c.title || 'Certificate');
        const p = document.createElement('p');
        p.textContent = c.desc || '';
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        const t1 = document.createElement('span');
        t1.textContent = c.issuer || '';
        const t2 = document.createElement('span');
        t2.textContent = c.date || '';
        tags.appendChild(t1);
        tags.appendChild(t2);
        const links = document.createElement('div');
        links.className = 'project-links';
        if (c.link) {
            const aEl = document.createElement('a');
            aEl.href = c.link;
            aEl.target = '_blank';
            aEl.rel = 'noopener noreferrer';
            aEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Certificate';
            aEl.addEventListener('click', function(e){ e.stopPropagation(); });
            links.appendChild(aEl);
        }

        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(tags);
        info.appendChild(links);
        card.appendChild(info);
        grid.appendChild(card);
    });
}

// Render Certificates from PORTFOLIO_DATA and localStorage
// Certificates rendering removed per request

// Render Achievements from PORTFOLIO_DATA into the same grid as certificates
function renderAchievementsFromData() {
    const achievements = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.achievements) || null;
    const grid = document.querySelector('#projects .projects-grid');
    if (!Array.isArray(achievements) || !grid) return;

    achievements.forEach(a => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', 'achievement');

        const imgWrap = document.createElement('div');
        imgWrap.className = 'project-img';
        const img = document.createElement('img');
        img.src = (a.image || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.images && window.PORTFOLIO_DATA.images.projectPlaceholder)) || 'images/project-placeholder.jpg';
        img.alt = a.title || 'Achievement';
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);

        const info = document.createElement('div');
        info.className = 'project-info';
        const h3 = document.createElement('h3');
        h3.innerHTML = '<i class="fas fa-trophy"></i> ' + (a.title || 'Achievement');
        const p = document.createElement('p');
        p.textContent = a.desc || '';
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        const t1 = document.createElement('span');
        t1.textContent = a.awardedBy || '';
        const t2 = document.createElement('span');
        t2.textContent = a.date || '';
        tags.appendChild(t1);
        tags.appendChild(t2);
        const links = document.createElement('div');
        links.className = 'project-links';
        if (a.link) {
            const aEl = document.createElement('a');
            aEl.href = a.link;
            aEl.target = '_blank';
            aEl.rel = 'noopener noreferrer';
            aEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Details';
            aEl.addEventListener('click', function(e){
                e.stopPropagation();
            });
            links.appendChild(aEl);
        }

        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(tags);
        info.appendChild(links);
        card.appendChild(info);
        grid.appendChild(card);
    });
}
function renderPortfolioCombined() {
    const grid = document.querySelector('#projects .projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const staticProjects = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.projects) || [];
    const localProjects = getProjectsData();
    const projects = [...staticProjects, ...localProjects];
    const achievements = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.achievements) || [];
    const certificates = ((window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.certificates) || []).concat(JSON.parse(localStorage.getItem('portfolioCertificates') || '[]'));

    const lfIndex = projects.findIndex(p => (p.name || '').toLowerCase() === 'line following robot');
    const sndIndex = achievements.findIndex(a => (a.title || '').toLowerCase().includes('search n\' destroy'));

    const firstProject = lfIndex >= 0 ? projects.splice(lfIndex, 1)[0] : null;
    const firstAchievement = sndIndex >= 0 ? achievements.splice(sndIndex, 1)[0] : null;
    const renderProject = (project) => {
        const card = document.createElement('div');
        card.className = 'project-card' + (project.category === 'robotics' ? ' robotics-card' : '');
        if (project && project.category === 'robotics' && ((project.name || '').toLowerCase().includes('line following'))) {
            card.className += ' no-top-line';
        }
        card.setAttribute('data-category', 'project');

        const imgWrap = document.createElement('div');
        imgWrap.className = 'project-img';
        const imgsList = Array.isArray(project.images) ? project.images.filter(Boolean) : (project.image ? [project.image] : []);
        const mediaList = project.video ? imgsList.concat([project.video]) : imgsList;
        const firstSrc = mediaList[0] || ((window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.images && window.PORTFOLIO_DATA.images.projectPlaceholder) || 'images/project-placeholder.jpg');
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        const vid = document.createElement('video');
        vid.preload = 'metadata';
        img.alt = project.name || 'Project';
        img.style.transition = 'opacity 400ms ease';
        vid.style.width = '100%';
        vid.style.height = '100%';
        vid.style.objectFit = 'cover';
        vid.controls = true;
        vid.playsInline = true;
        vid.muted = true;
        vid.autoplay = true;
        imgWrap.appendChild(img);
        imgWrap.appendChild(vid);
        imgWrap.style.position = 'relative';
        imgWrap.style.overflow = 'hidden';
        let cur = 0;
        function isVideoSrc(src){ return /\.(mp4|webm|ogg)$/i.test(src||''); }
        function setMedia(i){
            cur = i;
            const src = mediaList[cur] || firstSrc;
            const isVid = isVideoSrc(src);
            imgWrap.classList.toggle('is-video', !!isVid);
            if (isVid) {
                vid.style.display = 'block';
                img.style.display = 'none';
                if (vid.src !== src) vid.src = src;
                try { vid.currentTime = 0; } catch(e) {}
                stopAuto();
                var playPromise = vid.play();
                if (playPromise && typeof playPromise.then === 'function') {
                    playPromise.catch(function(){});
                }
                try { vid.playbackRate = 2; } catch(e) {}
            } else {
                img.style.display = 'block';
                vid.style.display = 'none';
                try { vid.pause(); } catch(e) {}
                img.style.opacity = '0.2';
                setTimeout(function(){ img.src = src; img.style.opacity = '1'; }, 120);
            }
            if (dots) {
                const children = Array.prototype.slice.call(dots.children);
                for (var j=0;j<children.length;j++){ children[j].classList.toggle('active', j===cur); }
            }
        }
        let intervalId = null;
        function startAuto(){
            if (intervalId) clearInterval(intervalId);
            if (mediaList.length>1 && !isVideoSrc(mediaList[cur])) intervalId = setInterval(function(){ setMedia((cur+1)%mediaList.length); }, 5000);
        }
        function stopAuto(){ if (intervalId) { clearInterval(intervalId); intervalId = null; } }
        var dots = null;
        if (mediaList.length>1) {
            const prev = document.createElement('div');
            prev.style.position = 'absolute';
            prev.style.left = '0';
            prev.style.top = '0';
            prev.style.height = '100%';
            prev.style.width = '15%';
            prev.style.cursor = 'pointer';
            const next = document.createElement('div');
            next.style.position = 'absolute';
            next.style.right = '0';
            next.style.top = '0';
            next.style.height = '100%';
            next.style.width = '15%';
            next.style.cursor = 'pointer';
            imgWrap.appendChild(prev);
            imgWrap.appendChild(next);
            dots = document.createElement('div');
            dots.className = 'media-dots';
            dots.style.position = 'absolute';
            dots.style.bottom = '8px';
            dots.style.left = '50%';
            dots.style.transform = 'translateX(-50%)';
            dots.style.display = 'flex';
            dots.style.gap = '6px';
            for (var i=0;i<mediaList.length;i++){
                const d = document.createElement('button');
                d.className = 'dot';
                d.style.width = '8px';
                d.style.height = '8px';
                d.style.borderRadius = '50%';
                d.style.border = 'none';
                d.style.padding = '0';
                d.style.cursor = 'pointer';
                if (i===0) d.classList.add('active');
                d.addEventListener('click', (function(ix){ return function(e){ e.stopPropagation(); stopAuto(); setMedia(ix); startAuto(); }; })(i));
                dots.appendChild(d);
            }
            imgWrap.appendChild(dots);
            prev.addEventListener('click', function(e){ e.stopPropagation(); stopAuto(); setMedia((cur-1+mediaList.length)%mediaList.length); startAuto(); });
            next.addEventListener('click', function(e){ e.stopPropagation(); stopAuto(); setMedia((cur+1)%mediaList.length); startAuto(); });
            imgWrap.addEventListener('mouseenter', stopAuto);
            imgWrap.addEventListener('mouseleave', startAuto);
            imgWrap.addEventListener('wheel', function(e){ e.preventDefault(); stopAuto(); setMedia(e.deltaY>0 ? (cur+1)%mediaList.length : (cur-1+mediaList.length)%mediaList.length); startAuto(); }, { passive: false });
        }
        imgWrap.addEventListener('dblclick', function(){
            const src = mediaList[cur] || firstSrc;
            if (isVideoSrc(src)) { window.open(src, '_blank'); } else { openLightbox(mediaList.filter(function(s){ return !isVideoSrc(s); }), Math.min(cur, mediaList.filter(function(s){ return !isVideoSrc(s); }).length-1)); }
        });
        if (vid) {
            vid.addEventListener('play', stopAuto);
            vid.addEventListener('pause', startAuto);
            vid.addEventListener('ended', function(){
                setMedia((cur+1)%mediaList.length);
                startAuto();
            });
        }
        card.appendChild(imgWrap);
        setMedia(0);
        startAuto();

        // Keyboard navigation for media
        imgWrap.tabIndex = 0;
        imgWrap.addEventListener('keydown', function(e){
            if (mediaList.length < 2) return;
            if (e.key === 'ArrowRight') { stopAuto(); setMedia((cur+1)%mediaList.length); startAuto(); }
            if (e.key === 'ArrowLeft') { stopAuto(); setMedia((cur-1+mediaList.length)%mediaList.length); startAuto(); }
        });

        // Subtle 3D tilt effect on hover
        (function(){
            var maxRotateX = 6, maxRotateY = 10;
            function handleMove(ev){
                var rect = card.getBoundingClientRect();
                var x = (ev.clientX - rect.left) / rect.width;
                var y = (ev.clientY - rect.top) / rect.height;
                var rY = (x - 0.5) * 2 * maxRotateY;
                var rX = (0.5 - y) * 2 * maxRotateX;
                card.style.transform = 'perspective(800px) rotateX(' + rX.toFixed(2) + 'deg) rotateY(' + rY.toFixed(2) + 'deg)';
            }
            function reset(){ card.style.transform = ''; }
            card.addEventListener('mousemove', handleMove);
            card.addEventListener('mouseleave', reset);
        })();

        const info = document.createElement('div');
        info.className = 'project-info';
        const h3 = document.createElement('h3');
        h3.textContent = project.name || 'Project';
        const p = document.createElement('p');
        p.textContent = project.description || '';
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        if (project.technologies) {
            (project.technologies.split(',') || []).map(s => s.trim()).filter(Boolean).forEach(t => {
                const span = document.createElement('span');
                span.textContent = t;
                tags.appendChild(span);
            });
        }
        const links = document.createElement('div');
        links.className = 'project-links';
        if (project.link) {
            const aEl = document.createElement('a');
            aEl.href = project.link;
            aEl.target = '_blank';
            aEl.rel = 'noopener noreferrer';
            aEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Project';
            aEl.addEventListener('click', function(e){ e.stopPropagation(); });
            links.appendChild(aEl);
        }

        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(tags);
        info.appendChild(links);
        card.appendChild(info);
        grid.appendChild(card);
    };

    const renderAchievement = (a) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', 'achievement');
        const imgWrap = document.createElement('div');
        imgWrap.className = 'project-img';
        const imgs = Array.isArray(a.images) ? a.images.filter(Boolean) : (a.image ? [a.image] : []);
        const firstSrc = imgs[0] || ((window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.images && window.PORTFOLIO_DATA.images.projectPlaceholder) || 'images/project-placeholder.jpg');
        const img = document.createElement('img');
        img.src = firstSrc;
        img.alt = a.title || 'Achievement';
        img.style.transition = 'opacity 400ms ease';
        imgWrap.appendChild(img);
        imgWrap.style.position = 'relative';
        imgWrap.style.overflow = 'hidden';
        let cur = 0;
        function setImage(i){
            cur = i;
            img.style.opacity = '0.2';
            setTimeout(function(){ img.src = imgs[cur] || firstSrc; img.style.opacity = '1'; }, 120);
            if (dots) {
                const children = Array.prototype.slice.call(dots.children);
                for (var j=0;j<children.length;j++){ children[j].classList.toggle('active', j===cur); }
            }
        }
        let intervalId = null;
        function startAuto(){ if (intervalId) clearInterval(intervalId); if (imgs.length>1) intervalId = setInterval(function(){ setImage((cur+1)%imgs.length); }, 5000); }
        function stopAuto(){ if (intervalId) { clearInterval(intervalId); intervalId = null; } }
        var dots = null;
        if (imgs.length>1) {
            const prev = document.createElement('div');
            prev.style.position = 'absolute';
            prev.style.left = '0';
            prev.style.top = '0';
            prev.style.height = '100%';
            prev.style.width = '15%';
            prev.style.cursor = 'pointer';
            const next = document.createElement('div');
            next.style.position = 'absolute';
            next.style.right = '0';
            next.style.top = '0';
            next.style.height = '100%';
            next.style.width = '15%';
            next.style.cursor = 'pointer';
            imgWrap.appendChild(prev);
            imgWrap.appendChild(next);
            dots = document.createElement('div');
            dots.className = 'media-dots';
            dots.style.position = 'absolute';
            dots.style.bottom = '8px';
            dots.style.left = '50%';
            dots.style.transform = 'translateX(-50%)';
            dots.style.display = 'flex';
            dots.style.gap = '6px';
            for (var i=0;i<imgs.length;i++){
                const d = document.createElement('button');
                d.className = 'dot';
                d.style.width = '8px';
                d.style.height = '8px';
                d.style.borderRadius = '50%';
                d.style.border = 'none';
                d.style.padding = '0';
                d.style.cursor = 'pointer';
                if (i===0) d.classList.add('active');
                d.addEventListener('click', (function(ix){ return function(e){ e.stopPropagation(); stopAuto(); setImage(ix); startAuto(); }; })(i));
                dots.appendChild(d);
            }
            imgWrap.appendChild(dots);
            prev.addEventListener('click', function(e){ e.stopPropagation(); stopAuto(); setImage((cur-1+imgs.length)%imgs.length); startAuto(); });
            next.addEventListener('click', function(e){ e.stopPropagation(); stopAuto(); setImage((cur+1)%imgs.length); startAuto(); });
            imgWrap.addEventListener('mouseenter', stopAuto);
            imgWrap.addEventListener('mouseleave', startAuto);
            imgWrap.addEventListener('wheel', function(e){ e.preventDefault(); stopAuto(); setImage(e.deltaY>0 ? (cur+1)%imgs.length : (cur-1+imgs.length)%imgs.length); startAuto(); }, { passive: false });
            imgWrap.addEventListener('dblclick', function(){ openLightbox(imgs, cur); });
            startAuto();
        }
        card.appendChild(imgWrap);
        // Keyboard navigation for images
        imgWrap.tabIndex = 0;
        imgWrap.addEventListener('keydown', function(e){
            if (imgs.length < 2) return;
            if (e.key === 'ArrowRight') { stopAuto(); setImage((cur+1)%imgs.length); startAuto(); }
            if (e.key === 'ArrowLeft') { stopAuto(); setImage((cur-1+imgs.length)%imgs.length); startAuto(); }
        });
        (function(){
            var maxRotateX = 6, maxRotateY = 10;
            function handleMove(ev){
                var rect = card.getBoundingClientRect();
                var x = (ev.clientX - rect.left) / rect.width;
                var y = (ev.clientY - rect.top) / rect.height;
                var rY = (x - 0.5) * 2 * maxRotateY;
                var rX = (0.5 - y) * 2 * maxRotateX;
                card.style.transform = 'perspective(800px) rotateX(' + rX.toFixed(2) + 'deg) rotateY(' + rY.toFixed(2) + 'deg)';
            }
            function reset(){ card.style.transform = ''; }
            card.addEventListener('mousemove', handleMove);
            card.addEventListener('mouseleave', reset);
        })();
        const info = document.createElement('div');
        info.className = 'project-info';
        const h3 = document.createElement('h3');
        h3.innerHTML = '<i class="fas fa-trophy"></i> ' + (a.title || 'Achievement');
        const p = document.createElement('p');
        p.textContent = a.desc || '';
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        const t1 = document.createElement('span');
        t1.textContent = a.awardedBy || '';
        const t2 = document.createElement('span');
        t2.textContent = a.date || '';
        tags.appendChild(t1);
        tags.appendChild(t2);
        const links = document.createElement('div');
        links.className = 'project-links';
        if (a.link) {
            const aEl = document.createElement('a');
            aEl.href = a.link;
            aEl.target = '_blank';
            aEl.rel = 'noopener noreferrer';
            aEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Details';
            aEl.addEventListener('click', function(e){ e.stopPropagation(); });
            links.appendChild(aEl);
        }
        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(tags);
        info.appendChild(links);
        card.appendChild(info);
        grid.appendChild(card);
    };

    const renderCertificate = (c) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', 'certificate');
        const imgWrap = document.createElement('div');
        imgWrap.className = 'project-img';
        const img = document.createElement('img');
        img.src = (c.image || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.images && window.PORTFOLIO_DATA.images.projectPlaceholder)) || 'images/project-placeholder.jpg';
        img.alt = c.title || 'Certificate';
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);
        (function(){
            var maxRotateX = 6, maxRotateY = 10;
            function handleMove(ev){
                var rect = card.getBoundingClientRect();
                var x = (ev.clientX - rect.left) / rect.width;
                var y = (ev.clientY - rect.top) / rect.height;
                var rY = (x - 0.5) * 2 * maxRotateY;
                var rX = (0.5 - y) * 2 * maxRotateX;
                card.style.transform = 'perspective(800px) rotateX(' + rX.toFixed(2) + 'deg) rotateY(' + rY.toFixed(2) + 'deg)';
            }
            function reset(){ card.style.transform = ''; }
            card.addEventListener('mousemove', handleMove);
            card.addEventListener('mouseleave', reset);
        })();
        const info = document.createElement('div');
        info.className = 'project-info';
        const h3 = document.createElement('h3');
        h3.innerHTML = '<i class="fas fa-certificate"></i> ' + (c.title || 'Certificate');
        const p = document.createElement('p');
        p.textContent = c.desc || '';
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        const t1 = document.createElement('span');
        t1.textContent = c.issuer || '';
        const t2 = document.createElement('span');
        t2.textContent = c.date || '';
        tags.appendChild(t1);
        tags.appendChild(t2);
        const links = document.createElement('div');
        links.className = 'project-links';
        if (c.link) {
            const aEl = document.createElement('a');
            aEl.href = c.link;
            aEl.target = '_blank';
            aEl.rel = 'noopener noreferrer';
            aEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Certificate';
            aEl.addEventListener('click', function(e){ e.stopPropagation(); });
            links.appendChild(aEl);
        }
        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(tags);
        info.appendChild(links);
        card.appendChild(info);
        grid.appendChild(card);
    };

    if (firstProject) renderProject(firstProject);
    if (firstAchievement) renderAchievement(firstAchievement);
    projects.forEach(renderProject);
    achievements.forEach(renderAchievement);
    certificates.forEach(renderCertificate);

    

    if (!grid.children.length) {
        grid.innerHTML = '<p style="text-align: center; width: 100%;">No items to display yet.</p>';
    }
}

let _lb = null;
function ensureLightbox(){
    if (_lb) return _lb;
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'none';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.flexDirection = 'column';

    const img = document.createElement('img');
    img.id = 'lightbox-img';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '85%';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';

    const controls = document.createElement('div');
    controls.style.marginTop = '16px';
    controls.style.display = 'flex';
    controls.style.gap = '12px';

    const btnStyle = 'background:#fff;color:#111;border:none;padding:8px 12px;border-radius:6px;cursor:pointer;font-weight:600;';
    const prev = document.createElement('button');
    prev.textContent = 'Prev';
    prev.style.cssText = btnStyle;
    const next = document.createElement('button');
    next.textContent = 'Next';
    next.style.cssText = btnStyle;
    const close = document.createElement('button');
    close.textContent = 'Close';
    close.style.cssText = btnStyle;

    controls.appendChild(prev);
    controls.appendChild(next);
    controls.appendChild(close);

    overlay.appendChild(img);
    overlay.appendChild(controls);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e){ if (e.target === overlay) closeLightbox(); });
    close.addEventListener('click', closeLightbox);
    prev.addEventListener('click', function(e){ e.stopPropagation(); if (_lb){ const i = (_lb.index-1+_lb.list.length)%_lb.list.length; showLightboxImage(i);} });
    next.addEventListener('click', function(e){ e.stopPropagation(); if (_lb){ const i = (_lb.index+1)%_lb.list.length; showLightboxImage(i);} });

    _lb = { overlay, img, list: [], index: 0 };
    return _lb;
}

function openLightbox(list, startIndex){
    const lb = ensureLightbox();
    lb.list = list;
    lb.index = Math.max(0, Math.min(list.length-1, startIndex||0));
    showLightboxImage(lb.index);
    lb.overlay.style.display = 'flex';
}

function showLightboxImage(i){
    if (!_lb || !_lb.list.length) return;
    _lb.index = i;
    _lb.img.src = _lb.list[i];
}

function closeLightbox(){
    if (!_lb) return;
    _lb.overlay.style.display = 'none';
}
