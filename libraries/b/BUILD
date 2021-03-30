load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//:tsconfig"],
)

ts_project(
    name = "b",
    srcs = glob(["*.ts"]),
    tsconfig = "tsconfig",
)

js_library(
    name = "b_js",
    package_name = "@libs/b",
    deps = [
        "b",
        "tsconfig",
    ],
)
