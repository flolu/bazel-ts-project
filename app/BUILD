load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = [
        "//:tsconfig",
        "//libraries/a:tsconfig_lib",
        "//libraries/b:tsconfig_lib",
    ],
)

ts_config(
    name = "tsconfig_test",
    src = "tsconfig.test.json",
    deps = [
        "//:tsconfig",
        "//libraries/a:tsconfig_lib",
        "//libraries/b:tsconfig_lib",
    ],
)

ts_project(
    name = "app",
    srcs = ["index.ts"],
    composite = True,
    declaration = True,
    tsconfig = "tsconfig",
    deps = [
        "//libraries/a:a_js",
        "//libraries/b:b_js",
        "@npm//@types/node",
    ],
)

ts_project(
    name = "app_test",
    srcs = ["index.test.ts"],
    composite = True,
    declaration = True,
    tsconfig = "tsconfig_test",
    deps = [
        "app",
        "@npm//@types/jasmine",
        "@npm//@types/node",
    ],
)

jasmine_node_test(
    name = "test",
    config_file = "jasmine.json",
    templated_args = ["--bazel_patch_module_resolver"],
    deps = ["app_test"],
)

nodejs_binary(
    name = "bin",
    data = [
        "app",
    ],
    entry_point = "index.ts",
)
