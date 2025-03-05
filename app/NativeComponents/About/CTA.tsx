import Assessment from "@/app/ui/Assessment";
export default function CTA(){
    return(
        <section className='bg-foreground w-full py-8 h-full'>
            <div className='wrapper flex flex-col items-center justify-center gap-3'>
                <h2 className='headline text-background '>
                Ready to Upgrade Your Energy?
                </h2>
                <p className='text-background p-text'>
                Switch to reliable solar and electrical solutions today.
                </p>
                <div>
                <Assessment />
                </div>

            </div>

        </section>
    )
}