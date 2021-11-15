import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { login } from '../../lib/auth'

import form from '../../styles/form.module.sass'

export default function LoginForm() {
  const contentType = 'application/json'
  const [user, setUser] = useState({ user: '', password: '' })
  const router = useRouter()



  const handleSubmit = useCallback((e) => {
    const postUser = async (user) => {
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: {
            Accept: contentType,
            'Content-Type': contentType,
          },
          body: JSON.stringify(user),
        })

        // Throw error with status code in case Fetch API req failed
        if (res.status === 200) {
          const { token } = await res.json()
          login({ token }, false)
          router.push('/login')
        }
      } catch (error) {
        console.log(error)
      }
    }
    e.preventDefault()
    postUser(user)
  }, [user,router])

  return (
    <div className={form.loginContainer}>
      <form
        className={form.loginForm}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={form.input}>
          <input
            className={form.username}
            name="username"
            type="text"
            placeholder="Username..."
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            className={form.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className={form.bottom}>
          <div className={form.button}>
            <button>Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}
