module.exports = {
    apps: [
        {
            name: "erp_app",
            script: "npm",
            args: "run preview -- --host --port 5100",
            watch: false,
        },
        {
            name: "erp_app_DEV",
            script: "npm",
            args: "run dev -- --host --port 5173",
            out_file: "/dev/null",
            watch: false
        }
    ],
};
