import Link from 'next/link';

export default function Navbar() {
  return (
     <nav className="flex items-center justify-between p-4 border-b">
      <Link className="font-bold text-xl text-gray-500" href="/">Captured In Love Media</Link>
      <div className="flex gap-4">
        <Link href="/about" className='text-gray-500'>About</Link>
        <Link href="/contentCreation" className='text-gray-500'>Content Creation</Link>
        <Link href="/FAQs" className='text-gray-500'>FAQs</Link>
        <Link href="/contact" className='text-gray-500'>Contact</Link>
      </div>
    </nav>
  )
}
