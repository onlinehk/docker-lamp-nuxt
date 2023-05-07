module.exports = {
    apps: [
      {
        name: "Nuxt",
        script: ".output/server/index.mjs",
        args: "", // 传递给脚本的参数
        watch: true, // 开启监听文件变动重启
        ignore_watch: ["node_modules", "public", "logs"], // 不用监听的文件
        autorestart: true, // 默认为 true, 发生异常的情况下自动重启
        max_memory_restart: "1G",
        merge_logs: true, // 设置追加日志而不是新建日志
        log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定日志文件的时间格式
        min_uptime: "60s", // 应用运行少于时间被认为是异常启动
        max_restarts: 30, // 最大异常重启次数
        restart_delay: 60, // 异常重启情况下，延时重启时间
        env: {
          // 环境参数，当前指定为开发环境
          NODE_ENV: "development",
          PORT: "3000",
        },
      },
    ],
  };