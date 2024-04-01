import "../Footer/style.css";
const styles = {
    footerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        fontSize: "20px",
    },
};


export function Footer() {
    return (
        <footer style={styles.footerStyle} className="footer">
            <p>Created by: </p>
        </footer>
    );
}

export default Footer;