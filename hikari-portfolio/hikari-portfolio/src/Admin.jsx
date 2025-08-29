import { useState } from 'react'

const PASSWORD = "minhasenha123" // Troque por sua senha

export default function Admin({ onLogin }) {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PASSWORD) {
      onLogin()
    } else {
      setError("Senha incorreta!")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Área Administrativa</h2>
        <input
          type="password"
          placeholder="Digite a senha"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border px-4 py-2 rounded mb-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Entrar</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  )
}