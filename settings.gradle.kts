import dev.scaffoldit.hytale.wire.HytaleManifest

rootProject.name = "UnifiedMaterials"

plugins {
    id("dev.scaffoldit") version "0.2.+"
}
hytale {
    usePatchline("release")
    useVersion("latest")

    repositories {}

    dependencies {}

    manifest {
        Group = "Inconvenient"
        Name = "Unified Materials"
        Version = "0.3.1"
        Description = "Lots of materials for use in other mods"
        Authors = listOf(HytaleManifest.Author("Inconvenient Dev", "", "https://inconvenient.gg"))
        Website = "https://www.curseforge.com/hytale/mods/unified-materials"
        ServerVersion = "2026.02.19-1a311a592"
        Main = "gg.inconvenient.unifiedmaterials.UnifiedMaterials"
        IncludesAssetPack = true
    }
}