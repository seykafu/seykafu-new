// src/config/settings.rs

use serde::Deserialize;

#[derive(Deserialize)]
pub struct Settings {
    #[serde(deserialize_with = "deserialize_ci")]
    pub ci: bool,
}

fn deserialize_ci<'de, D>(deserializer: D) -> Result<bool, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s: String = Deserialize::deserialize(deserializer)?;
    match s.as_str() {
        "true" => Ok(true),
        "false" => Ok(false),
        "npm run build" => Ok(false),
        _ => Err(serde::de::Error::custom("Invalid CI value")),
    }
}