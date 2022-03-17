// ArduinoJson - arduinojson.org
// Copyright Benoit Blanchon 2014-2018
// MIT License

#include <ArduinoJson6_8.h>
#include <catch.hpp>

using namespace ARDUINOJSON_NAMESPACE;

TEST_CASE("ElementProxy::add()") {
  DynamicJsonDocument doc(4096);
  doc.add();
  ElementProxy<JsonDocument&> ep = doc[0];

  SECTION("add(int)") {
    ep.add(42);

    REQUIRE(doc.as<std::string>() == "[[42]]");
  }

  SECTION("add(const char*)") {
    ep.add("world");

    REQUIRE(doc.as<std::string>() == "[[\"world\"]]");
  }
}
