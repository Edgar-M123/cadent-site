export const waitlistEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Waitlist</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #F87171 0%, #EF4444 100%);
            color: white;
            padding: 40px 32px;
            text-align: center;
        }
        
        .header h1 {
            margin: 0 0 8px 0;
            font-size: 28px;
            font-weight: 600;
        }
        
        .header p {
            margin: 0;
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 32px;
        }
        
        .welcome-message {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .welcome-message h2 {
            color: #1a202c;
            font-size: 24px;
            margin-bottom: 16px;
            font-weight: 600;
        }
        
        .welcome-message p {
            color: #4a5568;
            font-size: 16px;
            margin-bottom: 0;
        }
        
        .next-steps {
            background-color: #f7fafc;
            border-radius: 8px;
            padding: 24px;
            margin: 32px 0;
        }
        
        .next-steps h3 {
            color: #2d3748;
            font-size: 18px;
            margin-bottom: 16px;
            font-weight: 600;
        }
        
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            color: #4a5568;
        }
        
        .step:last-child {
            margin-bottom: 0;
        }
        
        .step-number {
            background-color: #F87171;
            color: white;
            font-size: 12px;
            font-weight: 600;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            margin-right: 12px;
            flex-shrink: 0;
            margin-top: 2px;
        }
        
        .cta-section {
            text-align: center;
            margin: 32px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #F87171 0%, #EF4444 100%);
            color: white;
            text-decoration: none;
            padding: 14px 32px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-1px);
        }
        
        .social-proof {
            background-color: #edf2f7;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            margin: 24px 0;
        }
        
        .social-proof p {
            color: #4a5568;
            margin: 0;
            font-size: 14px;
        }
        
        .social-proof .number {
            color: #F87171;
            font-weight: 700;
            font-size: 18px;
        }
        
        .footer {
            background-color: #f7fafc;
            padding: 32px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer p {
            color: #718096;
            font-size: 14px;
            margin: 8px 0;
        }
        
        .footer a {
            color: #F87171;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        .unsubscribe {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
        }
        
        @media (max-width: 640px) {
            .email-container {
                margin: 20px;
                border-radius: 8px;
            }
            
            .header {
                padding: 32px 24px;
            }
            
            .content {
                padding: 32px 24px;
            }
            
            .footer {
                padding: 24px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .welcome-message h2 {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🎉 You're In!</h1>
            <p>Thanks for joining our exclusive waitlist</p>
        </div>
        
        <div class="content">
            <div class="welcome-message">
                <h2>Welcome to the waitlist!</h2>
                <p>We're thrilled to have you on board. You're now part of an exclusive group who will be the first to experience what we're building.</p>
            </div>
            
            <div class="next-steps">
                <h3>What happens next?</h3>
                <div class="step">
                    <div class="step-number">1</div>
                    <div>We'll keep you updated on our progress with exclusive behind-the-scenes content</div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div>You'll be among the first to know when we launch (before anyone else!)</div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div>Get early access with special launch pricing just for waitlist members</div>
                </div>
            </div>
            
            <div class="cta-section">
                <a href="https://cadentapp.com" class="cta-button">Visit Our Website</a>
            </div>

        </div>
        
        <div class="footer">
            <p><strong>Cadent</strong></p>
            <p>Building something amazing, just for you.</p>
            <p>
                <a href="https://cadentapp.com">Website</a> • 
                <a href="https://x.com/cadentapp">X.com</a> • 
                <a href="mailto:hello@cadentapp.com">Contact</a>
            </p>
            
            <div class="unsubscribe">
                <p>
                    <a href="https://cadentapp.com/unsubscribe">Unsubscribe</a> from waitlist updates
                </p>
            </div>
        </div>
    </div>
</body>
</html>

`