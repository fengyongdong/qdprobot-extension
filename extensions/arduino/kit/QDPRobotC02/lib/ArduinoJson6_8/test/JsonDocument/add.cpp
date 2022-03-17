// ArduinoJson - arduinojson.org
// Copyright Benoit Blanchon 2014-2018
// MIT License

#include <ArduinoJson6_8.h>
#include <catch.hpp>

TEST_CASE("JsonDocument::add()") {
  DynamicJsonDocument doc(4096);

  SECTION("integer") {
    doc.add(42);

    REQUIRE(doc.as<std::string>() == "[42]");
  }

  SECTION("const char*") {
    doc.add("hello");

    REQUIRE(doc.as<std::string>() == "[\"hello\"]");
  }
}
