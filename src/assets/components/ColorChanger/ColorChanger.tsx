import { useState } from "react"

export const ColorChanger = function () {
    const [bgColor, bgColorChange] = useState<string>("#FFFFFF");
    return (
        <>
            <button onClick={() => {
                let hexStr = "#"
                const hexChars = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                for (let i = 0; i < 6; i++) {
                    hexStr += `${hexChars[Math.floor(Math.random() * 16)]}`
                };
                bgColorChange(hexStr)
                document.body.style.backgroundColor = bgColor
            }}>Random hatterszin</button>
        </>
    )
}