

const DynamicTextForPages = (props: any) => {
  return (
    <div className="text-lg md:text-2xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-blue-500 dark:from-blue-500 dark:to-orange-300">
              This is {props.text}
          </span>
      </div>
  )
}

export default DynamicTextForPages