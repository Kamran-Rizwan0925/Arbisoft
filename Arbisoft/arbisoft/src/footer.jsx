function Footer() {
  return (
    <>
    <div className="container-fluid mt-5" style={{backgroundColor: 'white', marginTop: '25px'}}>
        <ul style={{display:'flex', justifyContent: 'flex-end',flexWrap: 'wrap', listStyleType: 'none', }}>
            <li style={{padding: '0px 10px'}}><a href="/">Careers</a></li>
            <li style={{padding: '0px 10px'}}><a href="/">Blog</a></li>
            <li style={{padding: '0px 10px'}}><a href="/">Find New</a></li>
            <li style={{padding: '0px 10px'}}><a href="/">Publications</a></li>
            <li style={{padding: '0px 10px'}}><a href="/">Why Arbisoft</a></li>
        </ul>
    </div>
     </>
  );
}

export default Footer;
