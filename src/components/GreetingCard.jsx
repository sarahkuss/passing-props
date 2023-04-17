export default function GreetingCard({firstName, age}) { //destructuring directly in parameters. Works just the same as below
  // const { firstName, lastName, age } = props //destructuring firstName from props to be able to use later
  return(
    <div className="GreetingCard">
      <h3>Hello {firstName}, ({age})!</h3>
    </div>
  )
}