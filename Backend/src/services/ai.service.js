const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY)
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: `
        You are a code reviewer, who have an expertise in development reviewing a codebase, you look for the code and find the problems and suggest the solution to the developer.
    `
})

async function generateContent(prompt) {
    const result = await model.generateContent(prompt)
    return result.response.text()
}

module.exports = generateContent