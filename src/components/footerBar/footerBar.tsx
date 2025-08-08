export default function FooterBar({fixed = false} : {fixed : boolean}){


    const styleFixed = "fixed bottom-0 left-0 w-full border-black border rounded-top bg-black text-white p-4"
    const styleNotFixed = "bottom-0 left-0 w-full border-black border rounded-top bg-black text-white p-4"


    return (
        <>
            <footer className={fixed ? styleFixed : styleNotFixed}>
                <div className="mt-5 pt-2 container-fluid">
                    <div className="flex flex-col items-center">
                    <a href="https://github.com/MatheoD16" target="_blanck"><img className="github m-2" src="./github.png" alt="Mon GitHub"/></a>
                    </div>

                    <p className="m-2 p-1 text-center">Copyright © Unknowz</p>
                
                </div>
            </footer>
        </>
    )
}