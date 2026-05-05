import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const Chat = () => {
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const pregunta = event.target.pregunta.value

        fetch("http://localhost:2026/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pregunta: pregunta })
        })
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error(err))
    }
    //https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat
    return (
        <div>
            <div className="flex-1 rounded-lg p-4 mb-4 overflow-y-auto">
                <ReactMarkdown remarkPlugins={remarkGfm}>
                    {message}
                </ReactMarkdown>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input name="pregunta" type="text" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" >
                    Preguntar
                </button>
            </form>
        </div>
    )
}

export default Chat