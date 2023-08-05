import smartpy as sp

@sp.module
def main():
    class Story(sp.Contract):
        def __init__(self, title, first_chapter_hash):
            
                    self.data.author = sp.sender
                    self.data.crafters = sp.set()
                    self.data.title = title
                    chapters = sp.big_map()
                    ongoing = False
                    chapter_id = sp.nat(1)
                    current_proposal = sp.record(
                    votes = sp.big_map(),
                    option_1 = sp.bytes(""),
                    option_2 = sp.bytes(""),
                    option_3 = sp.bytes(""),
                    timestamp = sp.timestamp(0), # Initial timestamp set to 0 for initialization.
                    deadline = sp.timestamp(0),  # Added a deadline timestamp.
                    active = False
                )
                    self.data.chapters[1] = first_chapter_hash

        @sp.entry_point
        def propose_chapter(self, params):
            assert (sp.sender == self.data.author)
            assert self.data.current_proposal.active == False
            
            self.data.current_proposal.option_1 = params.option_1
            self.data.current_proposal.option_2 = params.option_2
            self.data.current_proposal.option_3 = params.option_3
            
            # Set the current timestamp
            self.data.current_proposal.timestamp = sp.now
            # Set the voting deadline (sp.now + 2 days)
            self.data.current_proposal.deadline = sp.now.add_seconds(172800) # 60*60*24*2 = 172800 seconds
            
            self.data.current_proposal.active = True

        @sp.entry_point
        def vote(self, params):
            # Verify if the sender is a crafter and if the voting is still within the deadline
            assert self.data.crafters.contains(sp.sender)
            assert sp.now < self.data.current_proposal.deadline # Ensure the vote is cast within the allowed window
            
            # Ensure the vote option is valid
            assert params.option_num == 1 or params.option_num == 2 or params.option_num == 3
            self.data.current_proposal.votes[sp.sender] = params.option_num

        
        @sp.entry_point
        def check_result(self):
            # Verify if the sender is the author and the proposal is active
            assert sp.sender == self.data.author, "Sender is not the author"
            assert self.data.current_proposal.active == True, "No active proposal"
            
            # Check the deadline
            assert sp.now >= self.data.current_proposal.deadline, "Deadline not reached yet"
        
            # Reset the proposal
            self.data.current_proposal = sp.record(
                votes = sp.big_map(),  # empty big map
                option_1 = sp.bytes(""),
                option_2 = sp.bytes(""),
                option_3 = sp.bytes(""),
                timestamp = sp.now,
                active = False,
                deadline = sp.timestamp(0)  # adding a deadline field with an initial (unrealistic) value
            )

        
