import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
        <div className='text-[#f0f6fc] flex justify-between pt-5 sm:px-10'>
            <div className='flex justify-between sm:gap-5'>
                <a href="" className='font-bold'>SNIPPETSHARE </a>
                <input 
                    type="text"
                    placeholder='Search...'
                    className='bg-[#0d1117] opacity-6 sm:py-1 sm:pl-2rounded-lg'
                />
                <a href="">Back to GitHub</a>
            </div>
                <div className='flex justify-between gap-5'>
                <button><FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} /></button>
                <button><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /></button>
                <button><a href=""><img src="https://avatars.githubusercontent.com/u/96949970?v=4" className='rounded-xl w-5 h-5' alt="" /></a></button>

            </div>
        </div>
        <div className='text-center mt-20 text-4xl font-thin'>
            <h1>Instantly share code, notes, and snippets.</h1>
        </div>
    </div>
  )
}

export default Header