const GradientText = (props: any) => {
    return (
      <div className="text-2xl md:text-5xl font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-violet-500 dark:to-pink-500">
              Hey, {props.text}
          </span>
      </div>
    )
  }
  
  export default GradientText