load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//:tsconfig"],
)

ts_project(
    name = "app",
    srcs = glob(["*.ts"]),
    tsconfig = "tsconfig",
    deps = [
        "//libraries/a:a_js",
        "//libraries/b:b_js",
        "@npm//@types/node",
    ],
)

nodejs_binary(
    name = "bin",
    data = [
        "app",
    ],
    entry_point = "index.ts",
)
