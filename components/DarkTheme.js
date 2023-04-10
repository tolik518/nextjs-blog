function DarkTheme() {
    return <style jsx global>{`
        /* Dark */
        :root {
            --background-color: rgb(31, 31, 31);
            --link-color: rgb(163, 200, 224);
            --text-color: rgb(255, 255, 255);
        }
    `}</style>
}

export default DarkTheme;
