# 🩺 Health-diagnosis-Assistant
A web-based AI health diagnosis assistant that analyzes user symptoms and provides potential disease predictions using a rule-based expert system. This educational tool helps users understand possible health conditions based on their symptoms while emphasizing the importance of professional medical consultation.


## 📋 Project Overview

The AI Health Diagnosis Assistant is an intelligent web application designed to bridge the gap between symptom onset and professional medical consultation. The system uses a comprehensive rule-based algorithm to analyze user-selected symptoms and provide potential disease matches with probability scores, educational information, and actionable recommendations.

## 🎯 Objectives

### Primary Objectives
- **Immediate Health Guidance**: Provide instant preliminary health screening without appointment scheduling
- **Health Education**: Increase health awareness through accessible medical information
- **Symptom Analysis**: Implement intelligent symptom-disease correlation using medical knowledge
- **User Accessibility**: Create an intuitive, responsive interface for diverse user populations
- **Medical Ethics Compliance**: Ensure appropriate disclaimers and educational focus

### Secondary Objectives
- **Technology Demonstration**: Showcase rule-based expert systems in healthcare applications
- **Scalable Architecture**: Design modular system supporting future enhancements
- **Cross-Platform Compatibility**: Ensure functionality across various devices and browsers
- **Performance Optimization**: Deliver fast, reliable symptom analysis and results

## 💻 Tech Stack & Requirements

### Operating System Requirements
- **Windows**: Windows 10/11 (64-bit recommended)
- **macOS**: macOS 10.14 or later
- **Linux**: Ubuntu 18.04+, CentOS 7+, or equivalent distributions

### Hardware Requirements
- **Minimum RAM**: 4GB (8GB recommended)
- **Storage**: 500MB free disk space
- **Processor**: Intel i3 or AMD equivalent (dual-core minimum)
- **Network**: Internet connection for initial setup and updates

 ### Software Requirements
- **Python**: Version 3.7 or higher
- **Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Git**: For version control and repository management

### Dependencies

 ✅ **Flask**==2.3.3

 ✅ **Werkzeug**==2.3.7

 ✅ **Jinja2**==3.1.2

 ## 🛠️ Tools

### Development Tools
- **Code Editor**: Visual Studio Code (recommended), PyCharm, or Sublime Text
- **Version Control**: Git and GitHub for source code management
- **Testing**: Manual testing across multiple browsers and devices
- **Documentation**: Markdown for README and project documentation

### Frameworks & Libraries
- **Backend Framework**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with Flexbox and Grid layouts
- **Icons**: Unicode emojis and custom CSS styling

### Development Environment
- **Local Server**: Flask development server
- **Debugging**: Browser developer tools and Python debugging
- **Package Management**: pip for Python package installation

### Architecture Components

1. **Presentation Layer**: HTML/CSS/JavaScript frontend with responsive design
2. **Application Layer**: Flask web framework handling HTTP requests and responses
3. **Business Logic Layer**: Rule-based diagnosis engine with symptom analysis
4. **Data Layer**: In-memory disease database with symptom correlations

## ✨ Features

### Core Features
- 🔍 **Interactive Symptom Selection**: User-friendly checkbox interface with 12 common symptoms
- 🧠 **Intelligent Diagnosis Engine**: Rule-based algorithm with weighted symptom matching
- 📊 **Probability Scoring**: Three-tier classification (High/Moderate/Low match percentages)
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Medical-Themed UI**: Professional, clean interface with medical iconography

### Advanced Features
- ⚡ **Real-Time Analysis**: Instant symptom processing without page reloads
- 📋 **Detailed Results**: Comprehensive disease descriptions and recommendations
- 🔄 **Reset Functionality**: Easy symptom clearing for multiple consultations
- 🛡️ **Privacy-Focused**: No personal data collection or storage
- ♿ **Accessibility**: Screen reader compatible with semantic HTML

### Educational Features
- 📚 **Medical Information**: Clear, accessible disease descriptions
- 💡 **Health Recommendations**: Actionable advice for each potential condition
- ⚠️ **Medical Disclaimers**: Prominent educational purpose emphasis
- 🏥 **Professional Guidance**: Clear direction to seek medical consultation

## 📸 Outputs

![Screenshot (705)](https://github.com/user-attachments/assets/15ff959f-dc57-4782-b7f0-8cbdbfc417f3)


![Screenshot (707)](https://github.com/user-attachments/assets/13c79a72-1e9e-4309-9048-0fefcc8c0a85)


![Screenshot (708)](https://github.com/user-attachments/assets/34874512-2edc-41a3-a365-b04f8c278f37)

![Screenshot (709)](https://github.com/user-attachments/assets/fb2ef052-4f37-4bc9-b4ba-942cd996e0f2)

### Symptom Selection Interface
- Clean, grid-based symptom selection with medical icons
- Real-time selection feedback and validation
- Professional medical theme with intuitive navigation

### Diagnosis Results
- Ranked list of potential conditions with probability percentages
- Color-coded risk levels (High: Red, Moderate: Orange, Low: Green)
- Detailed condition descriptions and recommendations
- Matched symptom count and diagnostic confidence indicators

### User Experience
- Smooth transitions between symptom input and results
- Loading animations during analysis processing
- Clear error handling and user feedback
- Mobile-optimized touch interactions

## 🚀 Setup and Installation

## How to Run:

1. **Create the folder structure** in VS Code:

```plaintext
health-diagnosis-assistant/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```


2. **Install Flask**:

```shellscript
pip install Flask
```


3. **Run the application**:

```shellscript
python app.py
```

* Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://192.168.83.243:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 135-556-690
🎉 Great! Your Flask app is now running successfully.

You're seeing this message because:

app.py was found and executed correctly.
Flask started the development server on:
http://127.0.0.1:5000 → This is for local access (on your own computer).

http://192.168.83.243:5000 → This is your local network IP , so others on the same network can access it too.

Open in Browser
Go to:

🔗 http://127.0.0.1:5000

You should see your AI Health Diagnosis Assistant form where users can select symptoms and get predicted diseases.

## 🔮 Future Enhancements
- **Expanded Disease Database**: Add 20+ additional medical conditions
- **Machine Learning Integration**: Hybrid ML-rule based system for improved accuracy
- **AI-Powered Diagnostics**: Deep learning models trained on medical datasets

**⚠️ Medical Disclaimer**: This application is for educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.



















