import Image from "next/image";

export default function Header() {
    return (
      <header className="flex flex-col">
        <div className="flex justify-between px-40 py-5 border-b-2">
          <Image
            src={'/uniben-logo.png'}
            width={200}
            height={200}
            alt="logo"
            priority
          />
          <ol className="flex items-center space-x-5">
            <li>Email</li>
            <li>Transcript</li>
            <li>Libray</li>
            <li>Servicom</li>
            <li>TetFund</li>
            <li>Quality Assurance</li>
          </ol>
        </div>
        <div className="py-10 sticky top-20">
          <ol className="flex justify-center space-x-12">               
            <li>Home</li>
            <li>About</li>
            <li>Admissions</li>
            <li>Academics</li>
            <li>Resources</li>
            <li>Student Life</li>
            <li>Updates</li>
            <li>Public Information</li>
            <li>Contact</li>
          </ol>
        </div>
      </header>
    )
  }