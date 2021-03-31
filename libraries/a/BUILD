load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//:tsconfig"],
)

ts_project(
    name = "a",
    srcs = glob(["*.ts"]),
    declaration = True,
    tsconfig = "tsconfig",
)

js_library(
    name = "a_js",
    package_name = "@libs/a",
    deps = [
        "a",
        "tsconfig",
    ],
)
