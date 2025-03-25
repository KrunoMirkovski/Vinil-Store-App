const Loading = () => { // Functional component that displays a loading spinner while content is loading
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div> 
        {/* Class explanation:
        // animate-spin: applies the spinning animation
        // rounded-full: makes the div circular
        // h-16 w-16: defines the size of the spinner (16 units)
        // border-t-4: sets a top border of 4 units (this creates the spinning effect)
        // border-blue-500: sets the color of the border to blue (using Tailwind’s blue-500 shade)
        // border-solid: makes the border style solid*/}
      </div>
    );
  };
  
  export default Loading;