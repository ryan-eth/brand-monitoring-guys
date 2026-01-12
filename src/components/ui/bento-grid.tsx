import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  img,
  imgClassName,
  href,
  cta,
  children,
}: {
  name?: string
  className?: string
  background?: ReactNode
  Icon?: any
  description?: string
  img?: string
  imgClassName?: string
  href?: string
  cta?: string
  children?: ReactNode
}) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-zinc-900/80 border border-white/10",
      "transform-gpu transition-all duration-300",
      "hover:bg-zinc-900 hover:border-white/20",
      className,
    )}
  >
    {background}
    {img && (
      <div className="absolute inset-0 w-full h-full">
        <img
          src={img}
          alt={name || ""}
          className={cn("w-full h-full object-cover object-center", imgClassName)}
        />
      </div>
    )}

    {children || (
      <>
        <div className="relative z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-2">
          {Icon && (
            <Icon className="h-10 w-10 text-white/80 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-90" />
          )}
          {name && (
            <h3 className="text-xl font-normal text-white">
              {name}
            </h3>
          )}
          {description && (
            <p className="text-base text-white/70 font-extralight leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {href && cta && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
          >
            <Button variant="ghost" asChild size="sm" className="text-white hover:text-white hover:bg-white/10">
              <a href={href}>
                {cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.02]" />
  </div>
)

export { BentoCard, BentoGrid }
