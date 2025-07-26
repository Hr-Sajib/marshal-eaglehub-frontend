"use client"

type MainButtonProps = {
  title: string
  className?: string // Optional custom class
  onClick?: () => void // Add optional onClick handler
  disabled?: boolean // Optional disabled state
  type?: "button" | "submit" | "reset" // Optional button type
}

export default function SubButton({
  title,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: MainButtonProps) {
  const dynamicPadding = title.length <= 5 ? "px-4" : title.length <= 10 ? "px-6" : "px-8"

  return (
    <button
      type={type}
      onClick={onClick} // Add the onClick handler
      disabled={disabled}
      className={`
        text-white py-[10px] ${dynamicPadding} rounded border border-primary font-semibold
        hover:bg-primary/50  hover:scale-95 transition-all duration-300
        disabled:opacity-50 cursor-pointer
        ${className}
      `}
    >
      {title}
    </button>
  )
}
