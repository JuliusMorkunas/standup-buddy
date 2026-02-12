import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Plus, RotateCcw, Edit3, Check, X, Star, Trash2 } from 'lucide-react'

const DEFAULT_TEAM_MEMBERS = ["Jane", "John"]

const TEAM_PRESETS = {
  Orion: [
    "Julius",
    "Abhinav",
    "Asta",
    "Artūras",
    "Mantas",
    "Navaneeth",
    "Neringa"
  ],
  Spark: [
    "Simonas",
    "Dainius",
    "Deividas",
    "Ligita",
    "Mindaugas",
    "Rayne",
    "Supreet",
    "Tomas"
  ],
  Trust: [
    "Matt",
    "Binky",
    "Mandar",
    "Qintao",
    "Ranjit",
    "Ripal",
    "Stephen",
    "Sudhir",
    "Julius B"
  ]
}
const MAX_TEAM_MEMBERS = 12

function StandupBuddy() {
  const [teamMembers, setTeamMembers] = useState(DEFAULT_TEAM_MEMBERS)
  const [selectedMembers, setSelectedMembers] = useState([])
  const [excludedMembers, setExcludedMembers] = useState([])
  const [currentSpeaker, setCurrentSpeaker] = useState(null)
  const [isSelecting, setIsSelecting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newMember, setNewMember] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('teamMembers')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTeamMembers(parsed)
        }
      } catch (e) {
        console.error('Failed to load saved team members')
      }
    }
  }, [])

  useEffect(() => {
    if (teamMembers !== DEFAULT_TEAM_MEMBERS) {
      localStorage.setItem('teamMembers', JSON.stringify(teamMembers))
    }
  }, [teamMembers])

  const selectNextPerson = () => {
    if (teamMembers.length === 0) return

    const availableMembers = teamMembers.filter(member =>
      !selectedMembers.includes(member) && !excludedMembers.includes(member)
    )
    if (availableMembers.length === 0) {
      // No more available members, don't auto-reset
      return
    }

    setIsSelecting(true)
    setCurrentSpeaker(null)

    // Short animation delay for dramatic effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableMembers.length)
      const finalSpeaker = availableMembers[randomIndex]
      setCurrentSpeaker(finalSpeaker)
      setSelectedMembers([...selectedMembers, finalSpeaker])
      setIsSelecting(false)

      // Trigger confetti
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.2, y: 0.6 }
        })
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.8, y: 0.6 }
        })
      }, 100)
    }, 800)
  }

  const resetSelection = () => {
    setSelectedMembers([])
    setExcludedMembers([])
    setCurrentSpeaker(null)
  }

  const addMember = () => {
    if (newMember.trim() && teamMembers.length < MAX_TEAM_MEMBERS) {
      setTeamMembers([...teamMembers, newMember.trim()])
      setNewMember('')
    }
  }

  const removeMember = (memberToRemove) => {
    setTeamMembers(teamMembers.filter(member => member !== memberToRemove))
    setSelectedMembers(selectedMembers.filter(member => member !== memberToRemove))
    setExcludedMembers(excludedMembers.filter(member => member !== memberToRemove))
    if (currentSpeaker === memberToRemove) {
      setCurrentSpeaker(null)
    }
  }

  const resetToDefault = () => {
    setTeamMembers(DEFAULT_TEAM_MEMBERS)
    setSelectedMembers([])
    setExcludedMembers([])
    setCurrentSpeaker(null)
  }

  const loadTeamPreset = (teamName) => {
    setTeamMembers(TEAM_PRESETS[teamName])
    setSelectedMembers([])
    setExcludedMembers([])
    setCurrentSpeaker(null)
  }

  const clearAll = () => {
    setTeamMembers([])
    setSelectedMembers([])
    setExcludedMembers([])
    setCurrentSpeaker(null)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addMember()
    }
  }

  const toggleMemberSelection = (member) => {
    if (isEditing) return

    // If standup hasn't started yet (no selected members), toggle exclusion state
    if (selectedMembers.length === 0) {
      if (excludedMembers.includes(member)) {
        setExcludedMembers(excludedMembers.filter(m => m !== member))
      } else {
        setExcludedMembers([...excludedMembers, member])
      }
    } else {
      // During standup, allow toggling both excluded and selected members (but not current speaker)
      if (member === currentSpeaker) return

      // Toggle excluded members first
      if (excludedMembers.includes(member)) {
        setExcludedMembers(excludedMembers.filter(m => m !== member))
      } else if (selectedMembers.includes(member)) {
        setSelectedMembers(selectedMembers.filter(m => m !== member))
      } else {
        setSelectedMembers([...selectedMembers, member])
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-2">Standup Buddy</h1>
          <p className="text-md text-gray-600">A fun way to randomize standup order</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          {/* Current Speaker Display */}
          <AnimatePresence mode="wait">
            {currentSpeaker ? (
              <motion.div
                key={isSelecting ? "selecting" : currentSpeaker}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  duration: isSelecting ? 0.1 : 0.5,
                  stiffness: isSelecting ? 400 : 300
                }}
                className="text-center mb-8"
              >
                <h2 className="text-5xl font-bold text-primary mb-2">{currentSpeaker}</h2>
                <p className="text-gray-600">It's your turn to speak!</p>
                {isSelecting && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block mt-4"
                  >
                    <Star className="w-8 h-8 mx-auto text-yellow-500" />
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="no-speaker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-5xl font-bold text-primary mb-2">...</h2>
                <p className="text-gray-500">We will start soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Show Select Next Person button only if there are available members */}
            {teamMembers.filter(member =>
              !selectedMembers.includes(member) && !excludedMembers.includes(member)
            ).length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={selectNextPerson}
                  disabled={isSelecting || teamMembers.length === 0 || isEditing}
                  className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                  {isSelecting
                    ? "✨ Selecting..."
                    : selectedMembers.length === 0
                      ? "Start Standup"
                      : "Select Next Person"
                  }
                </motion.button>
              )}

            {/* Show Reset Selection button only if there are selections or exclusions */}
            {(selectedMembers.length > 0 || excludedMembers.length > 0) && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={resetSelection}
                disabled={isEditing}
                className="w-full py-3 px-4 bg-white/50 hover:bg-white/60 text-secondary rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Selection
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5"
        >
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={() => !isEditing && toggleMemberSelection(member)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${isEditing
                  ? "cursor-default"
                  : "cursor-pointer hover:opacity-80"
                  } transition-opacity ${selectedMembers.includes(member)
                    ? "bg-primary/20 text-primary line-through cursor-pointer hover:opacity-80"
                    : excludedMembers.includes(member)
                      ? "bg-red-100 text-red-500 line-through cursor-pointer hover:opacity-80"
                      : "bg-white/50 text-secondary"
                  } ${isEditing ? "flex items-center gap-1" : ""}`}
              >
                {member}
                {isEditing && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeMember(member)
                    }}
                    className="ml-1 text-red-500 hover:text-red-700 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Edit Controls */}
          <div className="flex justify-center mt-4">
            {isEditing ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md w-full"
              >
                <div className="text-center mb-3">
                  <h3 className="font-medium text-primary">Edit Team Members</h3>
                  <p className="text-xs text-gray-500">Max {MAX_TEAM_MEMBERS} members</p>
                </div>

                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Add team member"
                    className="flex-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary"
                    disabled={teamMembers.length >= MAX_TEAM_MEMBERS}
                  />
                  <button
                    onClick={addMember}
                    disabled={!newMember.trim() || teamMembers.length >= MAX_TEAM_MEMBERS}
                    className="px-3 py-1.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>

                <div className="flex gap-2 justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={resetToDefault}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm"
                    >
                      Reset Default
                    </button>
                    <button
                      onClick={clearAll}
                      className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Clear All
                    </button>
                  </div>

                  <button
                    onClick={() => setIsEditing(false)}
                    className={`px-3 py-1.5 ${teamMembers.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                      } text-white rounded-lg text-sm flex items-center gap-1 transition-colors`}
                    disabled={teamMembers.length === 0}
                  >
                    <Check className="w-3.5 h-3.5" />
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="flex flex-col items-center mb-8">
                  {/* Customize Team Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/50 hover:bg-white/60 text-secondary rounded-full text-sm font-medium transition-all duration-200"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Customize Team
                  </motion.button>
                </div>
                {/* Team Preset Buttons */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-500 font-medium">Load Team Preset:</p>
                  <div className="flex gap-1">
                    {Object.keys(TEAM_PRESETS).map((teamName) => {
                      const isCurrentTeam = JSON.stringify(teamMembers) === JSON.stringify(TEAM_PRESETS[teamName])
                      return (
                        <motion.button
                          key={teamName}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => loadTeamPreset(teamName)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${isCurrentTeam
                            ? "bg-primary text-white"
                            : "bg-white/50 hover:bg-white/60 text-secondary"
                            }`}
                        >
                          {teamName}
                        </motion.button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div >
    </div >
  )
}

export default StandupBuddy
