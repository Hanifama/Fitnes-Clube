import { Children } from "react"

const AuthLayouts = (props) =>{
    const {children, title, desc}=props
    return(        
        <div className="w-full max-w-xs">
            <h1 className="text-blue-600 text-3xl mb-2">{title}</h1>
            <p className="font-medium text-slate-500 mb-8">
            {desc}
            </p>
            {children}
        </div>
    )
}

export default AuthLayouts