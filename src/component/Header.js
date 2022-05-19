const Header = () => {
    return ( 

        <div className="max-w-sm bg-white rounded-lg border bd border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-96 mt-20 sm">
                    <a href="/">
                    <img className="rounded-t-lg ml-5 mt-2 img border-4" src="./image/bg-1.JPEG" alt="" />
                    </a>
                <div className="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-lg h5text font-bold tracking-tight text-gray-900 dark:text-white">Improve your front-end<br></br>skills by building projects2021</h5>
                    </a>
                    <p clasNames="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center bg-red-600">Scan the QR code to visit frontend<br></br> Mentor and take your coding skill to <br></br>
                     the next level.</p>

                </div>
        </div>

        
     );
}
 
export default Header;