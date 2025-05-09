function Footer() {
  
  const date = new Date();
  let year = date.getFullYear();
  
  return (
    <>
    <div className="flex justify-center">
      <div className="h-fit max-w-7xl border border-red-500">
        <span>{year} Testpro Laboratory Pty Ltd. All rights reserved.</span>
      </div>
    </div>
    </>
  )
}

export default Footer;