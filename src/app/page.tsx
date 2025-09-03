import { Button, Hero } from "./components";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="
   ">
        {/* SMALL BUTTONS */}
        <div className=" space-y-2">
          <Button
            iconRight={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.96002 5.61003L9.13075 7.78076L6.96002 9.9515M14.1958 7.78076C14.1958 4.18417 11.2802 1.26855 7.68359 1.26855C4.087 1.26855 1.17139 4.18417 1.17139 7.78076C1.17139 11.3774 4.087 14.293 7.68359 14.293C11.2802 14.293 14.1958 11.3774 14.1958 7.78076Z" stroke="#FDFDFD" stroke-width="1.08537" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
            className=""size="medium" /> <br />
          <Button state="disabled" className="" label="Click Here" size="medium" /><br />
          <Button
            iconRight={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.96002 5.61003L9.13075 7.78076L6.96002 9.9515M14.1958 7.78076C14.1958 4.18417 11.2802 1.26855 7.68359 1.26855C4.087 1.26855 1.17139 4.18417 1.17139 7.78076C1.17139 11.3774 4.087 14.293 7.68359 14.293C11.2802 14.293 14.1958 11.3774 14.1958 7.78076Z" stroke="#FDFDFD" stroke-width="1.08537" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
            variant="minimal" className="" label="Click Here" size="small" /><br />
        </div>
      </div>
    </>
  );
}
