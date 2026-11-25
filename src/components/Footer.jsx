import { Camera, ToolCase } from 'lucide-react';


const Footer = () => {
  return (
    <footer className='flex h-12.5 items-center justify-between w-full border'>
        <p>Made with 💗 Utitbest</p>

        <p className='flex gap-3 items-center justify-center'>
            <Camera />
            <ToolCase />
        </p>
    </footer>
  )
}

export default Footer