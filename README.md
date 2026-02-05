# Code-Eye (AI Code Reviewer)

A powerful, AI-driven code review tool that leverages Google's Gemini API to provide intelligent code analysis, suggestions, and best practices feedback.

## 🚀 Features

- **Intelligent Code Analysis**: Powered by Google's Gemini API for comprehensive code reviews
- **Syntax Highlighting**: Enhanced code readability using PrismJS and Highlight.js
- **Real-time Review**: Instant feedback on code quality, bugs, and improvements
- **Clean UI**: Simple and intuitive interface built with React.js
- **RESTful API**: Robust backend built with Node.js and Express.js

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **PrismJS** - Syntax highlighting
- **Highlight.js** - Additional code formatting

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Gemini API** - AI-powered code analysis

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A Google Cloud account with Gemini API access

## 🔑 API Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key for Gemini API
3. Copy the API key for later use

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ai-code-reviewer
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
# From backend directory
npm start
```

The backend server will run on `http://localhost:5000`

### Start the Frontend Development Server

```bash
# From frontend directory
npm start
```

The frontend will run on `http://localhost:3000`

## 📖 Usage

1. **Enter Your Code**: Paste or type your code in the input area
2. **Click Review**: Press the "Review" button to send your code for analysis
3. **View Results**: The AI-powered review will appear with:
   - Code quality assessment
   - Bug identification
   - Performance suggestions
   - Best practices recommendations
   - Refactoring opportunities

## 🏗️ Project Structure

```
ai-code-reviewer/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🔌 API Endpoints

### POST `/api/review`

**Request Body:**
```json
{
  "code": "your code here",
  "language": "javascript" // optional
}
```

**Response:**
```json
{
  "success": true,
  "review": "AI-generated code review...",
  "suggestions": []
}
```

## 🎨 Features Breakdown

### Code Input
- Multi-line code editor
- Support for multiple programming languages
- Syntax highlighting in input area

### AI Review
- Powered by Google Gemini API
- Comprehensive code analysis
- Context-aware suggestions

### Result Display
- Syntax-highlighted output using PrismJS/Highlight.js
- Clear categorization of issues
- Actionable recommendations

## 🔧 Configuration

### Customizing Review Parameters

You can modify the Gemini API parameters in the backend controller:

```javascript
// Example configuration
const generationConfig = {
  temperature: 0.7,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 1024,
};
```

## 🐛 Troubleshooting

### Common Issues

**API Key Error**
- Ensure your Gemini API key is correctly set in the `.env` file
- Verify the API key is active in Google Cloud Console

**CORS Issues**
- Check that CORS is properly configured in Express.js
- Ensure frontend and backend URLs are correct

**Syntax Highlighting Not Working**
- Verify PrismJS and Highlight.js are properly imported
- Check language support for your code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- PrismJS and Highlight.js for syntax highlighting
- React.js community for excellent documentation
- Express.js for robust backend framework

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Made with ❤️ using React.js, Node.js, Express.js, and Gemini API**

