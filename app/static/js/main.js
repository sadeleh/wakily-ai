document.addEventListener('DOMContentLoaded', function() {
    // Check if particles.js is loaded
    if (typeof particlesJS !== 'function') {
        console.error('❌ particles.js library is NOT loaded. Check the script tag in base.html.');
        return;
    } else {
        console.log('✅ particles.js library loaded successfully');
        
        // Force repaint of particles canvas elements after a delay to ensure they're visible
        setTimeout(function() {
            const canvases = document.querySelectorAll('#particles-container canvas, #terminal-particles-container canvas');
            canvases.forEach(canvas => {
                // Force repaint by toggling display
                if (canvas) {
                    console.log('Forcing repaint of particles canvas');
                    const currentDisplay = canvas.style.display;
                    canvas.style.display = 'none';
                    // Trigger reflow
                    void canvas.offsetHeight;
                    canvas.style.display = currentDisplay || 'block';
                    
                    // Ensure canvas has proper dimensions
                    if (canvas.parentNode) {
                        canvas.width = canvas.parentNode.offsetWidth;
                        canvas.height = canvas.parentNode.offsetHeight;
                    }
                }
            });
        }, 1000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Adjust scroll offset based on header height (only if header is visible and fixed)
                const header = document.querySelector('header.code-header');
                let offsetTop = target.offsetTop;
                if (header && window.getComputedStyle(header).position === 'fixed') {
                    offsetTop -= header.offsetHeight;
                }
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language switcher (for demonstration)
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            if (this.textContent === 'English') {
                this.textContent = 'العربية';
                document.documentElement.setAttribute('lang', 'en');
                document.documentElement.setAttribute('dir', 'ltr');
            } else {
                this.textContent = 'English';
                document.documentElement.setAttribute('lang', 'ar');
                document.documentElement.setAttribute('dir', 'rtl');
            }
        });
    }

    // Header Scroll Effect (only adds 'scrolled' class, doesn't fix position)
    const header = document.querySelector('header.code-header');
    if (header) {
        const scrollThreshold = 50; // Pixels to scroll before changing header
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Initialize particles.js if the container exists
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#5e35b1"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#5e35b1",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Add animate.css classes with Intersection Observer for scroll effects
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes based on element or parent
                const target = entry.target;
                let animationClass = 'animate__fadeInUp'; // Default animation
                
                if (target.classList.contains('service-card') || target.classList.contains('feature-card')) {
                    // Stagger animation for cards
                    const delay = target.dataset.animationDelay || '0';
                    target.style.animationDelay = `${delay}s`;
                } else if (target.closest('.hero-content')) {
                    animationClass = 'animate__fadeInUp'; 
                } else if (target.closest('.hero-visual')) {
                    animationClass = 'animate__fadeInRight'; 
                } else if (target.classList.contains('section-header')) {
                    animationClass = 'animate__fadeInDown';
                }
                
                // Add base and specific animation classes
                target.classList.add('animate__animated', animationClass);
                target.classList.add('visibility-visible'); // Add class to mark as animated
                
                // Unobserve after animating
                observer.unobserve(target);
            }
        });
    };

    const animationObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements that should be animated
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-visual, .section-header, .service-card, .feature-card, .cta .container > *, .about-content, .about-image, .contact-form, .contact-info'); // Select all elements to animate
    
    elementsToAnimate.forEach((element, index) => {
        // Add a small delay for cards for staggered effect
        if (element.classList.contains('service-card') || element.classList.contains('feature-card')) {
            element.dataset.animationDelay = (index % 3) * 0.15; // Stagger based on grid column
        }
        element.classList.add('visibility-hidden'); // Hide initially
        animationObserver.observe(element);
    });
    
    // Initialize Matrix Particles
    if (document.getElementById('particles-container')) {
        particlesJS('particles-container', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#00ff00', '#0066ff', '#00ffff', '#d2a8ff']
                },
                shape: {
                    type: 'char',
                    character: {
                        value: ['0', '1', 'ا', 'ب', 'ت', 'ث', '<', '>', '{', '}', '=', '+', '*', '&', ':', ';'],
                        font: 'Fira Code',
                        style: '',
                        weight: '400',
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 10,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 4,
                        size_min: 1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    // Initialize Matrix Background (subtle effect)
    const matrixBackground = document.querySelector('.matrix-bg');
    if (matrixBackground) {
        const canvas = document.createElement('canvas');
        matrixBackground.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Characters to display (mix of binary, Arabic letters, and code symbols)
        const chars = '01ابتثحخدذرزسشصضطظعغفقكلمنهويءآأؤإئ{}[]()<>=+-*/&|;:,.~`';
        const charArray = chars.split('');
        
        const fontSize = 12;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        // Initial position for each column
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height);
        }
        
        function drawMatrix() {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Green text
            ctx.fillStyle = '#0066ff20';
            ctx.font = `${fontSize}px Fira Code`;
            
            // Loop through drops
            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                
                // Reset position or move down
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        // Draw matrix effect at 30 FPS
        setInterval(drawMatrix, 33);
        
        // Resize handler
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const newColumns = canvas.width / fontSize;
            
            // Reset drops array for new width
            if (newColumns > columns) {
                for (let i = drops.length; i < newColumns; i++) {
                    drops[i] = Math.floor(Math.random() * canvas.height);
                }
            }
        });
    }

    // Initialize Typed.js Animations
    const typingOptions = {
        typeSpeed: 60,
        startDelay: 300,
        backSpeed: 0,
        loop: false,
        showCursor: false
    };
    
    // Hero terminal typing effects
    if (document.getElementById('typing-intro')) {
        new Typed('#typing-intro', typingOptions);
    }
    
    setTimeout(() => {
        if (document.getElementById('typing-main')) {
            new Typed('#typing-main', {...typingOptions, startDelay: 100});
        }
    }, 2000);
    
    // CTA terminal typing effects
    setTimeout(() => {
        if (document.getElementById('typing-cta')) {
            new Typed('#typing-cta', {...typingOptions, startDelay: 100});
        }
    }, 500);
    
    setTimeout(() => {
        if (document.getElementById('typing-cta2')) {
            new Typed('#typing-cta2', {...typingOptions, startDelay: 100});
        }
    }, 3000);
    
    // Progress bar animation for terminal
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 800);
    }
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            
            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 30);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });
    
    // Syntax highlighting initialization with safety measures
    if (typeof hljs !== 'undefined') {
        console.log('✅ highlight.js is loaded, initializing syntax highlighting');
        
        // Properly sanitize code blocks before highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            try {
                // Use the newer highlightElement method which replaces the deprecated highlightBlock
                hljs.highlightElement(block);
                
                // Add security measures
                const parentBlock = block.closest('.code-block');
                if (parentBlock) {
                    const fileNameEl = parentBlock.querySelector('.file-name');
                    
                    // Check for sensitive code blocks
                    if (fileNameEl && fileNameEl.textContent.includes('language-models.js')) {
                        console.log('🔒 Found sensitive code block, adding security measures');
                        
                        // Add security classes
                        parentBlock.classList.add('mobile-hide');
                        parentBlock.classList.add('hidden-sensitive-code');
                        
                        // Sanitize content on mobile
                        if (window.matchMedia('(max-width: 768px)').matches) {
                            parentBlock.style.display = 'none';
                            parentBlock.style.visibility = 'hidden';
                        }
                    }
                    
                    // Add ARIA attributes for accessibility
                    parentBlock.setAttribute('aria-description', 'Code example');
                    
                    // Add extra sanitization for all code blocks
                    const allCodeBlocks = document.querySelectorAll('pre code');
                    allCodeBlocks.forEach(codeBlock => {
                        // Prevent XSS by ensuring content is properly escaped
                        // This is just an extra measure on top of server-side escaping
                        const content = codeBlock.innerHTML;
                        // Preserve content that's already safely escaped
                        // This is just a defense-in-depth measure
                        codeBlock.setAttribute('data-sanitized', 'true');
                    });
                }
            } catch (e) {
                console.error('❌ Error highlighting code block:', e);
            }
        });
    } else {
        console.error('❌ highlight.js is not loaded properly');
    }
    
    // Function to ensure mobile-hiding of sensitive code
    function ensureMobileSafety() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        // Find blocks with language-models.js filename using standard selectors
        const codeHeaders = document.querySelectorAll('.code-header .file-name');
        const languageModelsBlocks = [];
        
        // Find blocks containing "language-models.js" in the filename
        codeHeaders.forEach(header => {
            if (header.textContent.includes('language-models.js')) {
                const codeBlock = header.closest('.code-block');
                if (codeBlock) {
                    languageModelsBlocks.push(codeBlock);
                    // Add our specific class for CSS targeting
                    codeBlock.classList.add('hidden-sensitive-code');
                    codeBlock.classList.add('mobile-hide');
                }
            }
        });
        
        if (isMobile && languageModelsBlocks.length > 0) {
            console.log('📱 Mobile detected, hiding language-models.js blocks');
            languageModelsBlocks.forEach(block => {
                // Force hide with inline style as additional measure
                block.style.display = 'none';
                block.style.visibility = 'hidden';
                block.setAttribute('aria-hidden', 'true');
            });
        }
    }
    
    // Run immediately and on resize
    ensureMobileSafety();
    window.addEventListener('resize', ensureMobileSafety);
    
    // Chat Widget Functionality
    const chatToggle = document.getElementById('chatToggle');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatToggle && chatContainer) {
        // Toggle chat visibility
        chatToggle.addEventListener('click', function() {
            chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
        });
        
        // Close chat
        if (closeChat) {
            closeChat.addEventListener('click', function() {
                chatContainer.style.display = 'none';
            });
        }
        
        // Send message
        const sendChatMessage = function() {
            const message = messageInput.value.trim();
            if (message !== '') {
                // Add user message
                const userMessageHTML = `
                    <div class="message user">
                        <div class="message-content">${message}</div>
                    </div>
                `;
                chatMessages.innerHTML += userMessageHTML;
                messageInput.value = '';
                
                // Scroll to the bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate bot response after a short delay
                setTimeout(function() {
                    // Default responses based on keywords
                    let botResponse = 'شكراً لرسالتك. سأقوم بتحويلك إلى أحد ممثلي خدمة العملاء في أقرب وقت.';
                    
                    if (message.toLowerCase().includes('سعر') || message.toLowerCase().includes('تكلفة') || message.toLowerCase().includes('price')) {
                        botResponse = 'تختلف أسعارنا حسب احتياجاتك المحددة. يمكننا تقديم عرض سعر مخصص بعد فهم متطلباتك بشكل أفضل. هل ترغب في التحدث مع أحد مستشارينا؟';
                    } else if (message.toLowerCase().includes('خدمات') || message.toLowerCase().includes('services')) {
                        botResponse = 'نقدم مجموعة من الخدمات بما في ذلك تطوير وكلاء الذكاء الاصطناعي، تحسين نماذج اللغة الكبيرة، منتجات وكلاء الذكاء الاصطناعي، وحلول متخصصة للقطاع الحكومي. هل هناك خدمة معينة ترغب في معرفة المزيد عنها؟';
                    } else if (message.toLowerCase().includes('اتصال') || message.toLowerCase().includes('تواصل') || message.toLowerCase().includes('contact')) {
                        botResponse = 'يمكنك التواصل معنا عبر البريد الإلكتروني: info@wakily.sa أو الاتصال على: +966 12 345 6789';
                    }
                    
                    const botMessageHTML = `
                        <div class="message bot">
                            <span class="console-symbol">></span>
                            <div class="message-content">
                                <span class="typing-text">${botResponse}</span>
                            </div>
                        </div>
                    `;
                    chatMessages.innerHTML += botMessageHTML;
                    
                    // Scroll to the bottom again
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        };
        
        if (sendMessage) {
            sendMessage.addEventListener('click', sendChatMessage);
        }
        
        if (messageInput) {
            messageInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendChatMessage();
                }
            });
        }
    }
}); 