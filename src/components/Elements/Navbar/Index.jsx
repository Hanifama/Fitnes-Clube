import Button from "../Button/Index"

const Navbar = () => {
    return(
        <nav class="bg-primary-light mx-auto px-8 py-8 flex items-center justify-between gap-8 max-h-20">
         <img src="../public/img/logo-fit.png" alt="Logo" class="w-[150px] ml-11"/>
            <ul class="flex items-center gap-12 list-none">
                <li class="link">
                <a href="#" class="relative text-white pb-1 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5">Beranda</a>
                </li>
                <li class="link">
                <a href="#" 
                class="relative text-white pb-1 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5">Tentang</a>
                </li>
                <li class="link">
                <a href="#" class="relative text-white pb-2 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5">Service</a>
                </li> 
                <li class="link">
                <a href="#" class="relative text-white pb-2 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5">Program</a>
                </li> 
                <li class="link">
                <a href="#" class="relative text-white pb-1 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5">Komunitas</a>
                </li>            
            </ul>
            <div className="">
                <Button
                variant= "bg-secondary-dark" 
                >
                Sign Up
                </Button>
                <Button
                variant= "tranparent" 
                >
                Sign in
                </Button>
            </div>
        </nav>

      
    )
}

export default Navbar