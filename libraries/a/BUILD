load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig_lib",
    src = "tsconfig.json",
    deps = ["//:tsconfig"],
)

ts_config(
    name = "tsconfig_test",
    src = "tsconfig.test.json",
    deps = ["//:tsconfig"],
)

ts_project(
    name = "a",
    srcs = [
        "a.ts",
        "index.ts",
    ],
    composite = True,
    declaration = True,
    tsconfig = "tsconfig_lib",
    deps = ["@npm//@types/node"],
)

js_library(
    name = "a_js",
    package_name = "@libs/a",
    deps = [
        "a",
        "tsconfig_lib",
    ],
)

ts_project(
    name = "a_test",
    srcs = ["index.test.ts"],
    composite = True,
    declaration = True,
    tsconfig = "tsconfig_test",
    deps = [
        "a",
        "@npm//@types/jasmine",
        "@npm//@types/node",
    ],
)

jasmine_node_test(
    name = "test",
    config_file = "jasmine.json",
    templated_args = ["--bazel_patch_module_resolver"],
    deps = ["a_test"],
)
